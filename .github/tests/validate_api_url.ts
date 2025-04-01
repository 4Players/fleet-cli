import ts from "https://esm.sh/typescript";

const EXPECTED_URL = "https://fleet.4players.io/api";
const FILE_TO_CHECK = "./src/client.ts";

const source = await Deno.readTextFile(FILE_TO_CHECK);
const sourceFile = ts.createSourceFile(
  FILE_TO_CHECK,
  source,
  ts.ScriptTarget.Latest,
  true,
);

let foundValid = false;

function checkNode(node: ts.Node) {
  if (
    ts.isNewExpression(node) &&
    node.expression.getText() === "AppApi" &&
    node.arguments &&
    node.arguments.length > 0
  ) {
    const arg = node.arguments[0];

    if (
      ts.isCallExpression(arg) &&
      arg.expression.getText() === "configuration" &&
      arg.arguments.length > 0 &&
      ts.isStringLiteral(arg.arguments[0]) &&
      arg.arguments[0].text === EXPECTED_URL
    ) {
      foundValid = true;
    }
  }

  ts.forEachChild(node, checkNode);
}

checkNode(sourceFile);

if (!foundValid) {
  console.error(
    `❌ Expected: new AppApi(configuration("${EXPECTED_URL}", ...)) not found.`,
  );
  Deno.exit(1);
}

console.log("✅ API URL and call structure validated.");
