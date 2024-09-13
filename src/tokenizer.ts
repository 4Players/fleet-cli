// Tokenizer class that reads the filter expression character by character
export class Tokenizer {
  protected current = 0;
  protected input: string;

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
  match(expected: string, advance = true) {
    if (this.isAtEnd()) return false;
    if (this.input.substr(this.current, expected.length) !== expected) {
      return false;
    }
    if (advance) {
      this.current += expected.length;
    }
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

  // Read a quoted string (single or double)
  parseString() {
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
    return value;
  }

  // Read a number (integers only for now)
  parseNumber() {
    let value = "";
    while (!this.isAtEnd() && this.isDigit(this.peek())) {
      value += this.advance();
    }
    return value;
  }

  // Read an identifier (field name, variable name)
  parseIdentifier() {
    let value = "";
    while (
      !this.isAtEnd()
    ) {
      if (
        this.isAlpha(this.peek()) || this.isDigit(this.peek()) ||
        this.peek() === "."
      ) {
        value += this.advance();
      } else if (this.peek() === "[") {
        value += this.advance();
        while (!this.isAtEnd || this.peek() !== "]") {
          value += this.advance();
        }
        value += this.advance();
      } else {
        break;
      }
    }
    return value;
  }
}
