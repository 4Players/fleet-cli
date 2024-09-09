import jsonata from "jsonata";

/**
 * This function filters an array of objects using a custom filter syntax. The filter syntax defined in BNF is as follows:
 *
 * <filter>          ::= <group> | <negation> | <expression> | <expression> <logical_operator> <filter>
 * <group>           ::= "(" <filter> ")"
 * <negation>        ::= "NOT" <group> | "NOT" <expression>
 * <expression>      ::= <field> <comparison_operator> <value>
 * <logical_operator>::= "AND" | "OR"
 * <comparison_operator> ::= "=" | "!=" | ">" | "<" | ">=" | "<="
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

// Function to tokenize the filter expression
function tokenize(input: string) {
  const tokens: any[] = [];
  // Adjust regex to capture both single and double quotes around strings
  const regex =
    /\s*(\(|\)|AND|OR|NOT|=|!=|>=|<=|>|<|'[^']*'|"[^"]*"|\d+|\w+)\s*/g;
  let match;
  while ((match = regex.exec(input)) !== null) {
    const token = match[1];

    // Handle logical operators
    if (token === "AND" || token === "OR") {
      tokens.push({ type: TokenType.LOGICAL_OPERATOR, value: token });
    } // Handle NOT operator
    else if (token === "NOT") {
      tokens.push({ type: TokenType.NOT_OPERATOR, value: token });
    } // Handle parentheses
    else if (token === "(") {
      tokens.push({ type: TokenType.PARENTHESIS_OPEN, value: token });
    } else if (token === ")") {
      tokens.push({ type: TokenType.PARENTHESIS_CLOSE, value: token });
    } // Handle string values enclosed in quotes (both single and double)
    else if (/^'.*'$/.test(token) || /^".*"$/.test(token)) {
      tokens.push({ type: TokenType.VALUE_STRING, value: token.slice(1, -1) });
    } // Handle numbers
    else if (/^\d+$/.test(token)) {
      tokens.push({ type: TokenType.VALUE_NUMBER, value: token });
    } // Handle comparison operators
    else if (/^=|!=|>=|<=|>|<$/.test(token)) {
      tokens.push({ type: TokenType.OPERATOR, value: token });
    } // Handle identifiers
    else {
      tokens.push({ type: TokenType.IDENTIFIER, value: token });
    }
  }
  return tokens;
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
      const field = token.value;
      index++; // consume identifier
      const operator = tokens[index].value; // consume operator
      index++; // consume operator
      const valueToken = tokens[index]; // consume value
      index++; // consume value

      // Correctly handle value type (string or number)
      const value = valueToken.type === TokenType.VALUE_STRING
        ? `'${valueToken.value}'`
        : valueToken.value;

      return `$v.${field} ${operator} ${value}`;
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
  const tokens = tokenize(filterExpression);

  // Parse the tokens into a JSONata-compatible expression
  const jsonataExpressionStr = parseExpression(tokens);

  // Construct the JSONata expression using $filter
  const jsonataFilterStr =
    `$filter($, function($v, $i, $a) { ${jsonataExpressionStr} })`;
  console.log("JSONata filter expression:", jsonataFilterStr);

  // Prepare and evaluate the JSONata expression
  const expression = jsonata(jsonataFilterStr);
  const value = await expression.evaluate(data);

  return value;
}
