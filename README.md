# ODIN CLI Tool

This is a CLI tool for the ODIN project. It is used to interact with the ODIN APIs. It's written in Deno and uses the
TypeScript ODIN SDK internally.

## Installation

To install the CLI tool, you need to have Deno installed. You can install Deno by following the instructions on the
official Deno website: [https://deno.land/](https://deno.land/).

Next, run the following command to generate the CLI tool:

```bash
deno task build
```

This will build a `odin` binary (or `odin.exe` on Windows) in the root of the project. You can move this binary to a
directory in your PATH to use it globally. On macOS and Linux you might need to run the following command to make the
binary executable:

```bash
chmod +x odin
```

## Development

You need to have `npm` installed on your system. You can install it by following the instructions on the official npm
website: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).

If you want to work on the CLI tool, you can need to have `openapi-generator-cli` installed on your system. You can
install it by running the following command:

```bash
npm install @openapitools/openapi-generator-cli -g
```

On Mac you can also use Homebrew to install the `openapi-generator-cli`.

```bash
openapi-generator-cli version-manager set 7.3.0
```

### Updating the underlying SDK

To update the underlying SDK, you need to run the following command to make the script executable (if not done before):

```bash
chmod +x generate-sdk.sh
```

Then run the script to generate the SDK:

```bash
./generate-sdk.sh
```

This will generate the SDK from the OpenAPI specification file. The generated SDK will be placed in the `src/api` directory. The CLI tool uses this SDK to interact with the ODIN APIs.

### Testing the CLI tool

To run the CLI tool in development mode, you can run the following command:

```bash
deno run --allow-all src/main.ts
```

We use `--allow-all` because the CLI tool needs to access various system resources to work correctly:

- `--allow-read` to read the configuration file
- `--allow-write` to write the configuration file
- `--allow-net` to make API requests
- `--allow-env` to read environment variables

### Building the CLI tool

To build the CLI tool, you can run the following command:

```bash
deno task build
```

## Usage

The CLI tool is designed to work in two scenarios:

- You are working in a terminal and can interact with the CLI tool (it will prompt for all missing information)
- You are running the CLI tool in a CI/CD pipeline and need to provide all the necessary information as arguments

### Logging in and selecting an application

First, you need to login to the ODIN API. You can do this by running the following command:

```bash
odin login
```

You will be prompted to enter a valid access token. You can get an access token by logging into the dashboard, navigating to the settings section (click on the user profile at the top right and choose Settings from the drop-down menu). You will find the access token in the API section.

Copy an access token that you have generated and paste it into the terminal. The CLI tool will store the access token in a configuration file in your home directory (`~/.odin/config.json`).

You can also provide the access token as an argument to all commands (this overrides the stored access token and is useful in CI/CD scripts where you cannot prompt the user)

```bash
odin fleet images list --accessToken=<access-token>
```

Next, you need to select an application to work with. You can list all the applications by running the following command:

```bash
odin apps list
```

You will see a list of applications that you have access to. You can select an application by running the following command:

```bash
odin apps select
```

You can also provide an application ID as an argument to all commands (this overrides the selected application and is
useful in CI/CD scripts where you cannot prompt the user)

```bash
odin fleet images list --appId <application-id>
```

### Working with the CLI tool

The CLI tool is designed to work with the ODIN APIs. You can list, create, update, and delete resources using the CLI tool. The CLI tool is designed to be self-explanatory, and you can get help by running the following command:

```bash
odin --help
```

You can also get help for a specific command by running the following command:

```bash
odin fleet --help
odin fleet images --help
```

### Available Resources

The following resources are available in the CLI tool:

- `apps` - List, select, and create applications
- `fleet` - Manage ODIN Fleet resources
- `fleet images` - List, create, update, and delete ODIN Fleet images
- `fleet configs` - List, create, update, and delete ODIN Fleet server configurations
- `fleet deployments` - List, create, update, and delete ODIN Fleet deployments
- `fleet servers` - List, and work with ODIN Fleet servers that have been deployed

Use the `--help` flag to get more information about each resource and the available commands.

### Automation

You can run commands that create, delete or update resources with the `--dry-run` flag. This will show you the API request that will be made without actually making the request. This is useful to see what the CLI tool will do before actually doing it and it also allows you to copy the API request and run it manually (and slightly modified) if needed. This way you can quickly create scripts for CI/CD. Manually interact with the CLI in `--dry-run` mode and then use the `--payload=` flag to run the same command with the payload you want to use.

#### Example

In this example we will create a new image for the ODIN Fleet. We will first run the command in `--dry-run` mode to see what the API request will look like:

```bash
odin fleet images create --dry-run
```

The CLI will prompt for various information like the image name, description and which type of image to create. After entering all the information, the CLI will show you the payload that will be sent to the API. You can copy this payload and run the following command:

```bash
odin fleet images create --payload='{"name":"my-image","version":"0.4.2","type":"dockerImage",....}}'
```
