<h1 align=center>
    ODIN CLI Tool
</h1>

[![Build and Release ODIN CLI Tool](https://github.com/4Players/fleet-cli/actions/workflows/build-binaries.yml/badge.svg)](https://github.com/4Players/fleet-cli/actions/workflows/build-binaries.yml)

> [!NOTE]
> This is a CLI tool for the ODIN project. It is used to interact with the ODIN
> APIs. It's written in Deno and uses the TypeScript ODIN SDK internally.

## :book: Documentation

The documentation for the CLI tool is available in our developer documentation.
You can find the documentation for the CLI tool in the
[CLI section](https://www.4players.io/fleet/cli).

## :package: Installation

To use the Odin CLI no explicit installation is required. You can either use the
prebuilt binaries provided by us or compile it yourself.

### (Recommended) Prebuilt Binaries

You can simply head to the
[release page](https://github.com/4Players/fleet-cli/releases/latest) and
download the latest binary for your environment. Place it wherever you like and
optionally add the path to your `path` environment variable.

### Build it yourself

To run and build the CLI tool from source, you need to have Deno installed. For
best compatibility it is recommended to use the Deno version according to
[`.dvmrc`](.dvmrc). The easiest way to manage multiple Deno version is to use
[dvm](https://deno.land/x/dvm). After installing it you can run
`dvm install $(<.dvmrc)` in this repository to install the hinted version.
Alternatively, you can install Deno by following the instructions on the
official [Deno website](https://deno.land/).

> [!WARNING]
> Currently only Deno `v1` is supported! Due to upstream limitations Deno `v2`
> will not work at this time.

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

## :technologist: Development

> [!TIP]
> This part of the documentation is directed to Mac and Linux development.
> Working on Windows may require some adaptations to the following instructions.

You need to have `npm` installed on your system. You can install it by following
the instructions on the official [npm website](https://www.npmjs.com/get-npm).

Install the required dependencies by running:

```bash
npm install
```

### Updating the underlying SDK

To update the underlying SDK, you can simply run the following command:

```bash
deno task generate-api-from-backend
```

This will pull the latest OpenAPI specification file and generate the SDK from
it. The generated SDK will be placed in the `src/api` directory. The CLI tool
uses this SDK to interact with the ODIN APIs.

### Testing the CLI tool

To run the CLI tool in development mode, you can run the following command:

```bash
deno task run
```

Internally it calls `deno run --allow-all src/main.ts`. We use `--allow-all`
because the CLI tool needs to access various system resources to work correctly:

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

> [!TIP]
> More details about the CLI tool can be found in the
> [developer documentation](https://www.4players.io/fleet/cli).
