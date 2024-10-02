# ODIN CLI Tool

This is a CLI tool for the ODIN project. It is used to interact with the ODIN
APIs. It's written in Deno and uses the TypeScript ODIN SDK internally.

## Documentation

The documentation for the CLI tool is available in our developer documentation.
You can find the documentation for the CLI tool in the
[CLI section](https://www.4players.io/fleet/cli).

## Installation

To install the CLI tool, you need to have Deno installed. You can install Deno
by following the instructions on the official Deno website:
[https://deno.land/](https://deno.land/).

Next, run the following command to generate the CLI tool:

```bash
deno task build
```

This will build a `odin` binary (or `odin.exe` on Windows) in the root of the
project. You can move this binary to a directory in your PATH to use it
globally. On macOS and Linux you might need to run the following command to make
the binary executable:

```bash
chmod +x odin
```

## Development

You need to have `npm` installed on your system. You can install it by following
the instructions on the official npm website:
[https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).

If you want to work on the CLI tool, you can need to have
`openapi-generator-cli` installed on your system. You can install it by running
the following command:

```bash
npm install @openapitools/openapi-generator-cli -g
```

On Mac you can also use Homebrew to install the `openapi-generator-cli`.

```bash
openapi-generator-cli version-manager set 7.3.0
```

### Updating the underlying SDK

To update the underlying SDK, you need to run the following command to make the
script executable (if not done before):

```bash
chmod +x generate-sdk.sh
```

Then run the script to generate the SDK:

```bash
./generate-sdk.sh
```

This will generate the SDK from the OpenAPI specification file. The generated
SDK will be placed in the `src/api` directory. The CLI tool uses this SDK to
interact with the ODIN APIs.

### Testing the CLI tool

To run the CLI tool in development mode, you can run the following command:

```bash
deno run --allow-all src/main.ts
```

We use `--allow-all` because the CLI tool needs to access various system
resources to work correctly:

- `--allow-read` to read the configuration file
- `--allow-write` to write the configuration file
- `--allow-net` to make API requests
- `--allow-env` to read environment variables

### Building the CLI tool

To build the CLI tool, you can run the following command:

```bash
deno task build
```

This will create a binary executable (i.e. odin on macOS and Linux and odin.exe
on Windows) in the root of the project. You can move this binary to a directory
in your PATH to use it globally.

More details about the CLI tool can be found in the
[developer documentation](https://www.4players.io/fleet/cli).
