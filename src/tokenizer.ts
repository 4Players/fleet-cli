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
export class Tokenizer {
  private current = 0;
  private input: string;

  constructor(input: string) {
    this.input = input;
  }

  // Check if we've reached the end of the input
  isAtEnd() {
    return this.current >= this.input.length;
  }

  // Return the current character without advancing
  peek() {
    return this.input[this.current];
  }

  // Return the next character and advance the cursor
  advance() {
    return this.input[this.current++];
  }

  // Helper to match a specific string (like operators) and advance
  match(expected: string) {
    if (this.isAtEnd()) return false;
    if (this.input.substr(this.current, expected.length) !== expected) {
      return false;
    }
    this.current += expected.length;
    return true;
  }

  // Skip over whitespace characters
  skipWhitespace() {
    while (/\s/.test(this.peek())) this.advance();
  }

  // Helper to check if a character is a letter
  isAlpha(char: string) {
    return /[a-zA-Z_]/.test(char);
  }

  // Helper to check if a character is a digit
  isDigit(char: string) {
    return /\d/.test(char);
  }

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
    const quoteType = this.advance(); // consume opening quote
    let value = "";
    while (!this.isAtEnd() && this.peek() !== quoteType) {
      value += this.advance();
    }
    if (this.isAtEnd()) {
      throw new Error(
        `Unterminated string starting at position ${this.current}`,
      );
    }
    this.advance(); // consume closing quote
    return new Token(TokenType.VALUE_STRING, value);
  }

  // Read a number (integers only for now)
  readNumber() {
    let value = "";
    while (!this.isAtEnd() && this.isDigit(this.peek())) {
      value += this.advance();
    }
    return new Token(TokenType.VALUE_NUMBER, value);
  }

  // Read an identifier (field name, variable name)
  readIdentifier() {
    let value = "";
    while (
      !this.isAtEnd() &&
      (this.isAlpha(this.peek()) || this.isDigit(this.peek()))
    ) {
      value += this.advance();
    }
    return new Token(TokenType.IDENTIFIER, value);
  }
}
