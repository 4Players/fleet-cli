import jsonata from "jsonata";
import { Tokenizer } from "./tokenizer.ts";

/**
 * This function filters an array of objects using a custom filter syntax. The filter syntax defined in BNF is as follows:
 *
 * <filter>          ::= <group> | <negation> | <expression> | <expression> <logical_operator> <filter>
 * <group>           ::= "(" <filter> ")"
 * <negation>        ::= "NOT" <group> | "NOT" <expression>
 * <expression>      ::= <field> <comparison_operator> <value>
 * <logical_operator>::= "AND" | "OR"
 * <comparison_operator> ::= "=" | "!=" | ">" | "<" | ">=" | "<=" | "~"
 * <field>           ::= <identifier>
 * <value>           ::= <number> | <string>
 * <identifier>      ::= <letter> {<letter> | <digit>}*
 * <number>          ::= <digit>+
 * <string>          ::= '"' {<any_character_except_double_quote>}* '"'
 * <letter>          ::= "a" | "b" | ... | "z" | "A" | "B" | ... | "Z"
 * <digit>           ::= "0" | "1" | ... | "9"
 * <any_character_except_double_quote> ::= <any_character> - '"'
 */

// Token types for our simple filter language
const TokenType = {
  IDENTIFIER: "IDENTIFIER",
  OPERATOR: "OPERATOR",
  VALUE_STRING: "VALUE_STRING",
  VALUE_NUMBER: "VALUE_NUMBER",
  PARENTHESIS_OPEN: "PARENTHESIS_OPEN",
  PARENTHESIS_CLOSE: "PARENTHESIS_CLOSE",
  LOGICAL_OPERATOR: "LOGICAL_OPERATOR",
  NOT_OPERATOR: "NOT_OPERATOR",
};

// Class for creating and managing tokens
export class Token {
  constructor(public type: string, public value: string) {}
}

// Tokenizer class that reads the filter expression character by character
export class FilterTokenizer extends Tokenizer {
  // Tokenize the entire input string
  tokenize() {
    const tokens: Token[] = [];
    while (!this.isAtEnd()) {
      this.skipWhitespace();
      const token = this.nextToken();
      if (token) tokens.push(token);
    }
    return tokens;
  }

  // Determine and return the next token
  nextToken() {
    const char = this.peek();

    // Match parentheses
    if (char === "(") {
      this.advance();
      return new Token(TokenType.PARENTHESIS_OPEN, "(");
    } else if (char === ")") {
      this.advance();
      return new Token(TokenType.PARENTHESIS_CLOSE, ")");
    }

    // Match logical operators: AND, OR
    if (this.match("AND")) return new Token(TokenType.LOGICAL_OPERATOR, "AND");
    if (this.match("OR")) return new Token(TokenType.LOGICAL_OPERATOR, "OR");

    // Match NOT operator
    if (this.match("NOT")) return new Token(TokenType.NOT_OPERATOR, "NOT");

    // Match comparison operators: =, !=, >=, <=, >, <
    if (this.match("!=")) return new Token(TokenType.OPERATOR, "!=");
    if (this.match(">=")) return new Token(TokenType.OPERATOR, ">=");
    if (this.match("<=")) return new Token(TokenType.OPERATOR, "<=");
    if (this.match("=")) return new Token(TokenType.OPERATOR, "=");
    if (this.match(">")) return new Token(TokenType.OPERATOR, ">");
    if (this.match("<")) return new Token(TokenType.OPERATOR, "<");
    if (this.match("~")) return new Token(TokenType.OPERATOR, "~");

    // Match strings enclosed in single or double quotes
    if (char === '"' || char === "'") return this.readString();

    // Match numbers
    if (this.isDigit(char)) return this.readNumber();

    // Match identifiers (field names, variable names, etc.)
    if (this.isAlpha(char)) return this.readIdentifier();

    // If no valid token is found, throw an error
    throw new Error(
      `Unexpected character '${char}' at position ${this.current}`,
    );
  }

  // Read a quoted string (single or double)
  readString() {
    let value = this.parseString();
    return new Token(TokenType.VALUE_STRING, value);
  }

  // Read a number (integers only for now)
  readNumber() {
    let value = this.parseNumber();
    return new Token(TokenType.VALUE_NUMBER, value);
  }

  // Read an identifier (field name, allowing dots for nested fields)
  readIdentifier() {
    let value = this.parseIdentifier();
    return new Token(TokenType.IDENTIFIER, value);
  }
}

// Parser that converts tokens into a JSONata-compatible function-based string
function parseExpression(tokens: any[]): string {
  let index = 0;

  function parsePrimary(): string {
    const token = tokens[index];
    if (token.type === TokenType.PARENTHESIS_OPEN) {
      index++; // consume '('
      const expr = parseFilter();
      index++; // consume ')'
      return `(${expr})`;
    } else if (token.type === TokenType.NOT_OPERATOR) {
      index++; // consume 'NOT'
      return `$not(${parsePrimary()})`;
    } else if (token.type === TokenType.IDENTIFIER) {
      let field = token.value;
      index++; // consume identifier
      const operator = tokens[index].value; // consume operator
      index++; // consume operator
      const valueToken = tokens[index]; // consume value
      index++; // consume value

      // Replace all ['xxx'] with `xxx` for JSONata path syntax
      field = field.replace(/\['([^']+)'\]/g, "`$1`");

      if (operator === "~") {
        return `$contains($v.${field}, /${valueToken.value}/)`;
      } else {
        const value = valueToken.type === TokenType.VALUE_STRING
          ? `'${valueToken.value}'`
          : valueToken.value;

        return `$v.${field} ${operator} ${value}`;
      }
    }
  }

  function parseFilter(): string {
    let expr = parsePrimary();
    while (index < tokens.length) {
      const token = tokens[index];
      if (token.type === TokenType.LOGICAL_OPERATOR) {
        index++; // consume 'AND' or 'OR'
        const right = parsePrimary();
        const operator = token.value === "AND" ? "and" : "or";
        expr = `(${expr} ${operator} ${right})`;
      } else {
        break;
      }
    }
    return expr;
  }

  return parseFilter();
}

// Main function to filter the array using the custom filter syntax and JSONata
export async function filterArray(data: any[], filterExpression: string) {
  // Tokenize the filter expression
  const tokenizer = new FilterTokenizer(filterExpression);
  const tokens = tokenizer.tokenize();
  console.log(tokens);

  // Parse the tokens into a JSONata-compatible expression
  const jsonataExpressionStr = parseExpression(tokens);

  // Construct the JSONata expression using $filter
  const jsonataFilterStr =
    `$filter($, function($v, $i, $a) { ${jsonataExpressionStr} })`;

  // Prepare and evaluate the JSONata expression
  const expression = jsonata(jsonataFilterStr);
  const value = await expression.evaluate(data);

  return value;
}
