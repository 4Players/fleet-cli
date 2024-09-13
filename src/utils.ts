import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { Confirm } from "$cliffy/prompt/mod.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { Table } from "$cliffy/table/table.ts";
import jsonata from "jsonata";
import { Tokenizer } from "./tokenizer.ts";

export const logErrorAndExit = (
  message: string,
  ...optionalParams: unknown[]
) => {
  logError(message, ...optionalParams);
  Deno.exit(1);
};

export const logError = (message: string, ...optionalParams: unknown[]) => {
  console.error(`${colors.red("Error")}: ${message}`, ...optionalParams);
};
export const logSuccess = (message: string, ...optionalParams: unknown[]) => {
  console.log(`${colors.green("Success")}: ${message}`, ...optionalParams);
};

export const logInfo = (message: string, ...optionalParams: unknown[]) => {
  console.log(`${colors.blue("Info")}: ${message}`, ...optionalParams);
};

export const inform = (
  options: CommandOptions,
  message: string,
  ...optionalParams: unknown[]
) => {
  if (!options.format || options.format === "default") {
    if (!options.quiet) {
      console.log(message, ...optionalParams);
    }
  }
};

export const printAsTable = async (data: any, format: string) => {
  // Format is in the format "table(<property-paths>)"
  const match = format.match(
    /table\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/,
  );
  if (!match) {
    console.error("Invalid table format.");
    return;
  }

  const properties = match[1].split(",").map((path) => path.trim()); // Trim each path
  if (properties.length < 2) {
    logError("At least two properties are required for a table format.");
    Deno.exit(1);
  }

  if (!Array.isArray(data)) {
    data = [data];
  }

  const formatHeader = (path: string) => {
    return path.split(".").pop()!.toUpperCase();
  };

  const table = new Table();
  table.header(properties.map(formatHeader));

  for (const item of data) {
    const values: string[] = [];
    for (let path of properties) {
      // Replace all ['xxx'] with `xxx`
      path = path.replace(/\['([^']+)'\]/g, ".`$1`");

      try {
        const expression = jsonata(path);
        const value = await expression.evaluate(item);
        if (typeof value === "object") {
          values.push(JSON.stringify(value));
        } else {
          values.push(value);
        }
      } catch (error) {
        logError(`Error evaluating path '${path}'`, error);
        Deno.exit(1);
      }
    }

    table.push(values);
  }

  console.log(table.toString());
};

export const printAsText = (data: any) => {
  if (typeof data === "object") {
    printAsJson(data);
  } else {
    console.log(data);
  }
};

export const printAsJson = (data: any) => {
  console.log(JSON.stringify(data, null, 2));
};

function parseValueExpression(input: string): any {
  const regex = /value(?:\[separator='([^']*)'\])?\((.+)\)/;
  const match = input.match(regex);

  if (!match) {
    logErrorAndExit("Invalid value format.");
    return null; // Invalid format
  }

  const separator = match[1] || ","; // Use the default separator if not provided
  const content = match[2]; // The part inside parentheses

  return {
    separator: separator,
    values: parseNested(content),
  };
}

// Recursive parser to handle nested parentheses
function parseNested(input: string): any[] {
  const result = [];
  let current = "";
  let level = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "(") {
      if (level > 0) current += char;
      level++;
    } else if (char === ")") {
      level--;
      if (level > 0) {
        current += char;
      } else {
        result.push(parseNested(current));
        current = "";
      }
    } else if (char === "," && level === 0) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  if (current) {
    result.push(current.trim());
  }

  return result;
}

class ValueTokenizer extends Tokenizer {
  private separator = ",";
  private keys: string[] = [];
  private functions: string[] = [];

  parseAttributes() {
    if (!this.match("[")) {
      throw (
        "Invalid value format, attributes should start with [, i.e. value[separator=':'](...)."
      );
    }
    this.skipWhitespace();
    if (!this.match("separator=")) {
      throw (
        "Invalid value format, separator is expected after attributes start with [, i.e. value[separator=':'](...)."
      );
    }
    this.separator = this.parseString();
    this.skipWhitespace();
    if (!this.match("]")) {
      throw (
        "Invalid value format, separator is expected after attributes start with [, i.e. value[separator=':'](...)."
      );
    }
  }

  parseKey() {
    if (this.match("count", false)) {
      this.match("count");
      this.skipWhitespace();
      if (!this.match("(")) {
        throw ("Invalid value format. ( is expected after count.");
      }
      this.skipWhitespace();
      const key = this.parseIdentifier();
      this.skipWhitespace();
      if (!this.match(")")) {
        throw ("Invalid value format. ) is expected after count.");
      }
      this.functions.push(`$count(${key})`);
    } else {
      this.keys.push(this.parseIdentifier());
    }
  }

  parseKeys() {
    while (!this.isAtEnd() && this.peek() !== ")") {
      this.parseKey();
      this.skipWhitespace();
      if (!this.match(",")) {
        break;
      }
      this.skipWhitespace();
    }
  }

  parse(): any {
    while (!this.isAtEnd()) {
      this.skipWhitespace();
      if (!this.match("value")) {
        throw ("Invalid value format. Expected 'value'. i.e. value(...)");
      }
      this.skipWhitespace();
      if (this.peek() === "[") {
        this.parseAttributes();
      }
      this.skipWhitespace();
      if (!this.match("(")) {
        throw ("Invalid value format. Expected ( after value");
      }
      this.skipWhitespace();
      this.parseKeys();
      this.skipWhitespace();
      if (!this.match(")")) {
        throw ("Invalid value format. Expected ) after keys");
      }
    }

    return {
      separator: this.separator,
      values: this.keys,
      functions: this.functions,
    };
  }
}

export const printAsValue = async (data: any, type: string) => {
  const tokenizer = new ValueTokenizer(type);
  const result = tokenizer.parse();

  const separator = result.separator;
  const propertyPaths = result.values;

  if (!Array.isArray(data)) {
    data = [data];
  }

  // Acquire the values based on the array
  const globalValues: string[] = [];
  for (let path of result.functions) {
    // Replace all ['xxx'] with `xxx`
    path = path.replace(/\['([^']+)'\]/g, ".`$1`");

    const expression = jsonata(path);
    const value = await expression.evaluate(data);
    if (typeof value === "object") {
      globalValues.push(JSON.stringify(value));
    } else {
      globalValues.push(value);
    }
  }

  if (propertyPaths.length > 0) {
    for (const item of data) {
      const values: string[] = globalValues.slice();
      for (let path of propertyPaths) {
        // Replace all ['xxx'] with `xxx`
        path = path.replace(/\['([^']+)'\]/g, ".`$1`");

        const expression = jsonata(path);
        const value = await expression.evaluate(item);
        if (typeof value === "object") {
          values.push(JSON.stringify(value));
        } else {
          values.push(value);
        }
      }

      console.log(values.join(separator));
    }
  } else {
    console.log(globalValues.join(separator));
  }
};

export const printAsFlattened = (data: any, format: string) => {
  // Parse the format string to extract options and properties
  const match = format.match(/flattened(?:\[(.*?)\])?\(([^)]+)\)/);
  if (!match) {
    console.error("Invalid flattened format.");
    return;
  }

  const options = match[1]
    ? match[1].split(",").map((option) => option.trim())
    : [];
  const properties = match[2].split(",").map((path) => path.trim());

  // Default values
  let separator = ": ";
  let noPad = false;

  // Process options
  options.forEach((option) => {
    if (option === "noPad") {
      noPad = true;
    } else if (option.startsWith("separator=")) {
      separator = option.split("=")[1] || separator;
      // Remove quotes
      separator = separator.replace(/^['"](.*)['"]$/, "$1");
    }
  });

  const flattenObject = (obj: any, parentKey = "", result: any = {}) => {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        flattenObject(item, `${parentKey}[${index}]`, result);
      });
    } else if (obj && typeof obj === "object") {
      Object.keys(obj).forEach((key) => {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        flattenObject(obj[key], newKey, result);
      });
    } else {
      result[parentKey] = obj;
    }
    return result;
  };

  function matchesProperty(key: string, property: string): boolean {
    const regexFilter = property.replace("[]", "\\[\\d+\\]");

    // Create the regex pattern
    const regexPattern = new RegExp(`^${regexFilter}`);

    // Test the key against the pattern
    return regexPattern.test(key);
  }

  const processObject = (obj: any, properties: string[]) => {
    const flattened = flattenObject(obj);
    const result: string[] = [];

    // Find the longest key length
    let maxLength = 0;
    properties.forEach((property) => {
      // Iterate over the flattened object keys
      Object.keys(flattened).forEach((key) => {
        // Use the updated matching function
        if (matchesProperty(key, property)) {
          maxLength = Math.max(maxLength, key.length);
        }
      });
    });

    maxLength += 3;

    properties.forEach((property) => {
      // Iterate over the flattened object keys
      Object.keys(flattened).forEach((key) => {
        // Use the updated matching function
        if (matchesProperty(key, property)) {
          const padding = noPad
            ? ""
            : " ".repeat(Math.max(0, maxLength - key.length));
          result.push(`${key}${separator}${padding}${flattened[key]}`);
        }
      });
    });

    return result.join("\n");
  };

  const outputData = Array.isArray(data) ? data : [data];
  const output: string[] = [];

  outputData.forEach((item, index) => {
    if (index > 0) {
      output.push("---"); // Separator between array elements
    }
    output.push(processObject(item, properties));
  });

  console.log(output.join("\n"));
};

export const stdout = async (
  data: any,
  options: CommandOptions,
  defaultType: string,
) => {
  let type = options.format;
  if (!type || type === "default") {
    type = defaultType;
  }

  if (type.startsWith("table")) {
    await printAsTable(data, type);
  } else if (type === "json") {
    printAsJson(data);
  } else if (type === "text") {
    printAsText(data);
  } else if (type.startsWith("value")) {
    await printAsValue(data, type);
  } else if (type.startsWith("flattened")) {
    printAsFlattened(data, type);
  }
};

export const stderr = (message: string) => {
  console.error(`${colors.red("Error")}: ${message}`);
};

export const confirm = async (options: CommandOptions, message: string) => {
  if (options.force) {
    return true;
  }
  return await Confirm.prompt(message);
};

export const deepMerge = (target: any, source: any) => {
  const isObject = (obj: any) => obj && typeof obj === "object";

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

export const camelToSnake = (str: string) => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};

export const validateAtLeastOneOptionAvailable = (
  options: CommandOptions,
  requiredOption: string[],
) => {
  for (const option of requiredOption) {
    if (options[option]) {
      return;
    }
  }

  const optionNames = requiredOption.map((option) =>
    `--${camelToSnake(option)}`
  ).join(", ");

  logErrorAndExit(
    `At least one of the following options is required: ${optionNames}`,
  );
};

export const validateRequiredOptions = (
  options: CommandOptions,
  requiredOption: string[],
) => {
  for (const option of requiredOption) {
    if (!options[option]) {
      logErrorAndExit(`Option --${camelToSnake(option)} is required.`);
    }
  }
};
