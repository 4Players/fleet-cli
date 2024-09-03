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

This will generate the SDK from the OpenAPI specification file. The generated SDK will be placed in the `src/api`
directory. The CLI tool uses this SDK to interact with the ODIN APIs.

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

The ODIN CLI is a comprehensive command-line tool for managing and interacting with the game server hosting services
provided by 4Players. With this tool, you can manage apps, configure fleets, deploy servers, and perform various other
operations directly from your terminal.

### Key Features

- **Error Handling**: In case of an error, the CLI sends an error message to `stderr` and exits with code 1.
- **Successful Execution**: If everything works as expected, the CLI exits with code 0 and prints the result to
  `stdout`.
- **Output Formatting**: Customize the output format using the `--format` flag.
- **Force Execution**: The `--force` flag allows bypassing confirmation prompts.
- **Quiet Mode**: The `--quiet` flag suppresses informational messages, providing a cleaner output.

You can use the internal help command to get a list of available commands and their descriptions:

```bash
odin --help
```

You can get help for a specific command by running the following command:

```bash
odin <command> --help
```

### Authentication

Before using the CLI, users must authenticate by providing their API key. The API key can be obtained from
the [4Players Console](https://console.4players.io/settings/api-keys). The API key can be provided either during the
initial setup or via the `--api-key` parameter, which is particularly useful in CI/CD environments.

To log in:

```bash
odin login --api-key=<YOUR_API_KEY>
```

If you omit the `--api-key` parameter, the CLI will prompt you to enter the API key interactively.

### App Selection

Users must select an app before executing certain commands. This can be done interactively or by providing the app ID
directly with the `--app-id` parameter, which is especially useful in automated scripts.

To select an app interactively:

```bash
odin apps select
```

To use a specific app via the command line in any command just add the `--app-id` parameter overriding the selected app:

```bash
odin <command> --app-id=<APP_ID>
```

### Output Formatting

The ODIN CLI supports various output formats to accommodate different needs, such as human-readable formats for direct
interaction and machine-readable formats for scripts and automation.

#### Default Output

The default format is human-readable and designed to be intuitive for each command.

#### JSON Output

The `json` format outputs the command results in JSON format, conforming to the API specifications. This is useful for
processing data programmatically.

```bash
odin <command> --format=json
```

#### Table Output

The `table(propertyList)` format prints the result in a table format. The `propertyList` is a comma-separated list of
properties you want to display as table columns. Nested properties can be accessed using the dot syntax (e.g.,
`serverConfig.id`).

```bash
odin <command> --format="table(id,name)"
```

##### Example

```bash
odin fleet servers list --format="table(id,addr,ports['Game Port'].publishedPort)"
```

This would display a table with columns with the `id`, the servers IP address and the published game port.

#### Flattened Output

The `flattened[noPad,separator='->'](propertyList)` format prints a simple key value pair output, where each property is
displayed on a new line. The `separator` attribute allows you to define a custom separator between the key and value.

```bash
odin <command> --format="flattened(id,name)"
```

##### Optional Attributes

- **noPad**: Disables padding, resulting in a more compact output.
- **separator**: Changes the default separator (`:`) to any other character(s).

##### Example:

```bash
odin fleet servers list --format="flattened[separator='->'](id,name)"
```

This would output:

```
id->12345
name->MyServer
```

#### Value Output

The `value[separator='->'](propertyList)` format prints only the values of the specified properties in a single line,
separated by the chosen separator (default is tab).

```bash
odin <command> --format="value[separator=':'](id,name)"
```

##### Optional Attributes

- **Separator**: An optional attribute that lets you define a custom separator for the values.

##### Examples

```bash
odin fleet servers list --format="value[separator=':'](id,name)"
```

This would output:

```
12345:MyServer
```

It's a powerful tool for extracting specific information from the output of a command. I.e. it's super useful in scripts
or automation tasks. For example when creating an item you can use the `value` format to just get the ID of the created
item. That can easily be used in the next command.

```bash
IMAGE_ID=$(
  odin fleet images create \
  --name="Example Image" \
  --type="dockerImage" \
  --docker-image="example/example-image:latest" \    
  --registry-id=1 \
  --force \
  --format="value(id)")
  
echo "Created image with ID: $IMAGE_ID"
```

This would store the ID of the created image in the `IMAGE_ID` variable.

#### Advanced Property Lists

Property lists can be very flexible and powerful, especially when dealing with nested data or arrays. Here are some
advanced examples:

##### Accessing Nested Properties

```bash
odin fleet servers list --format="value[separator=':'](id,serverConfig.id)"
```

Output:

```
12345:67890
```

##### Indexing Arrays

```bash
odin fleet configs list --format="value[separator=':'](id,name,env[0].key,env[0].value)"
```

This would output the first key-value pair in the `env` array.

### Commands Documentation

#### Login

The `login` command is used to authenticate the CLI with your API key.

```bash
odin login [--api-key=<YOUR_API_KEY>]
```

**Optional Options**:

- **`--api-key=<YOUR_API_KEY>`**:  
  The API key to authenticate with. If you omit the `--api-key` parameter, the CLI will prompt you to enter the API key
  interactively.

#### Apps

Manage your applications within ODIN.

##### Select an App

Select an app to use for subsequent commands. This is required before executing certain commands (if not provided via
the `--app-id` parameter).

```bash
odin apps select [--app-id=<appId>]
``` 

**Optional Options**:

- **`--app-id=<appId>`**:  
  The ID of the app to select. If omitted, the CLI will prompt you to select an app interactively.

##### List Apps

Displays a list of all available apps. The currently selected app is highlighted (if output formatting supports it).

```bash
odin apps list
```

##### Get App Details

Fetch details for a specific app by ID.

```bash
odin apps get [--app-id=<appId>]
```

**Optional Options**:

- **`--app-id=<appId>`**:  
  The ID of the app to retrieve details for. If omitted, the CLI will prompt you to enter the app ID interactively.

##### Create New App

Creates a new app with the specified name and options. If you don't provide a name, the CLI will prompt you to enter
one.

```bash
odin apps create --name=<app_name>
```

**Options**:

- **`--name=<app_name>`**:  
  The name of the app to create.

##### Delete App

Deletes the specified app.

**Warning**: Deleting an app is irreversible and will remove all associated resources like
images, configs, deployments and servers.

```bash
odin apps delete [-app-id=<appId>]
```

**Optional Options**:

- **`--app-id=<appId>`**:  
  The ID of the app to delete. If omitted, the CLI will prompt you to enter the app ID interactively.

### Fleet Management

Manage ODIN Fleet related resources such as servers, deployments, configurations, and more.

#### Images

This section covers the management of server images in ODIN Fleet.

##### List Images

Lists all server images available in the fleet. Images can either be docker images provided by you or you can also
link to a Steam App ID.

If you provide your own docker images you need to register the registry with the ODIN Fleet. You can do this in the
console: https://console.4players.io/settings/docker-registries. You will need to the ID of the registry to create an
image.

```bash
odin fleet images list [--unused]
```

**Optional Options**:

- **`--unused`**:  
  An optional flag that filters the list to show only images that are not currently in use by any deployments.

##### Get Image Details

Retrieves details of a specific image.

`odin fleet images get` [`--image-id`=`IMAGE_ID`]

**Optional Options**:

- **`--image-id=<image_id>`**:  
  The ID of the image to retrieve details for. If omitted, the CLI will prompt you to enter the image ID interactively.

##### Create New Image

Creates a new image for use in deployments. There are many options available for creating an image, allowing you to
customize settings such as the Docker image, registry, and Steamworks integration.

`odin fleet images create` `--name`=`IMAGE_NAME` `--version`=`IMAGE_VERSION` `--os`=`IMAGE_OS` `--type`=`IMAGE_TYPE`
`--docker-image`=`DOCKER_IMAGE` `--registry-id`=`REGISTRY_ID` `--steam-app-id`=`STEAM_APP_ID` `--branch`=`STEAM_BRANCH`
`--password`=`STEAM_PASSWORD` `--command`=`STEAM_COMMAND` `--steamcmd-username`=`STEAMCMD_USERNAME`
`--steamcmd-password`=`STEAMCMD_PASSWORD` `--runtime`=`STEAM_RUNTIME` `--headful` `--request-license` `--unpublished`

**Options**:

- **`--name=<string>`**:  
  The name of the image. This is a required option to identify the image.

- **`--version=<string>`**:  
  Specifies the version of the image. This can be useful for managing different iterations of the same image.

- **`--os=<string>`**:  
  Defines the operating system that the image is based on. For example, it could be `linux`, `windows`, etc.

- **`--type=<string>`**:  
  Specifies the type of the image. This is either `dockerImage` or `steam`.

These options need to be provided to create a docker image (i.e. `--type=dockerImage`):

- **`--docker-image=<string>`**:  
  The name of the Docker image to use. This should be the full path to the Docker image in the registry.

- **`--registry-id=<number>`**:  
  The ID of the Docker registry where the image is stored. This is useful if you have multiple Docker registries
  configured.
  You can get the registry ID in the console https://console.4players.io/settings/docker-registries

Provide these options to create a Steam image (i.e. `--type=steam`):

- **`--steam-app-id=<number>`**:  
  The Steam App ID associated with the image. This is required if the image is related to a Steam application.

- **`--branch=<string>`**:  
  Specifies the Steam branch to use. This allows you to choose between different branches (e.g., `beta`, `stable`) of a
  Steam game or application.

- **`--password=<string>`**:  
  The password associated with the Steam branch, if required. This is typically used for private or protected branches.

- **`--command=<string>`**:  
  Specifies a command to be run by Steam, useful for custom deployment scripts or specific launch commands.

- **`--steamcmd-username=<string>`**:  
  The username for SteamCMD. Required for downloading and managing Steam games or tools via the command line.

- **`--steamcmd-password=<string>`**:  
  The password for SteamCMD. This is used in conjunction with the SteamCMD username to authenticate and perform
  operations.

- **`--runtime=<string>`**:  
  Specifies the Steam runtime environment. This might be necessary for games or applications that require a specific
  runtime version.

- **`--headful`**:  
  An optional flag that enables Steam in headful mode, where a graphical interface might be needed for certain
  operations.

- **`--request-license`**:  
  An optional flag to request a Steam license, usually needed for restricted or license-protected games.

- **`--unpublished`**:  
  If your Steam app is not published, you need to set this flag, otherwise leave it out.

You can use the `--format` flat to customize the output format. For example, to just display/get the image ID you can
use:

```bash
odin fleet images create --name=<image_name> --type=dockerImage --docker-image=<docker_image> --registry-id=<registry_id> --format="value(id)"
```

This is useful for bash scripts or other automation tasks.

##### Update Image

This command is not available yet. It will be added shortly. In the meatine you can use the `delete image` command to
remove an image and then create a new one with the updated settings.

##### Delete Image

```bash
odin fleet images delete --image-id=<image_id>
```

Deletes the specified image. If you omit the `--image-id` parameter, the CLI will prompt you to enter the image ID
interactively.

#### Servers

This section covers the management of servers in ODIN Fleet.

##### List Servers

```bash
odin fleet servers list
```

Lists all servers in your fleet.

    - **Get Server Details**:
      ```bash
      odin fleet servers get <server_id>
      ```
      Retrieves detailed information about a specific server.

    - **Create Server**:
      ```bash
      odin fleet servers create --config=<config_id> [--other-options]
      ```
      Deploys a new server with the specified configuration.

    - **Update Server**:
      ```bash
      odin fleet servers update <server_id> --config=<new_config_id> [--other-options]
      ```
      Updates the server with a new configuration.

    - **Delete Server**:
      ```bash
      odin fleet servers delete <server_id> --force
      ```
      Deletes the specified server. The `--force` flag can be used to bypass confirmation prompts.

- **Configurations**:
    - **List Configurations**:
      ```bash
      odin fleet configs list
      ```
      Lists all configurations available in the fleet.

    - **Get Configuration Details**:
      ```bash
      odin fleet configs get <config_id>
      ```
      Retrieves details of a specific configuration.

    - **Create New Configuration**:
      ```bash
      odin fleet configs create --name=<config_name> [--other-options]
      ```
      Creates a new configuration.

    - **Update Configuration**:
      ```bash
      odin fleet configs update <config_id> --name=<new_name> [--other-options]
      ```
      Updates an existing configuration.

    - **Delete Configuration**:
      ```bash
      odin fleet configs delete <config_id> --force
      ```
      Deletes the specified configuration.

- **Deployments**:
    - **List Deployments**:
      ```bash
      odin fleet deployments list
      ```
      Lists all deployments configured in your fleet.

    - **Get Deployment Details**:
      ```bash
      odin fleet deployments get <deployment_id>
      ```
      Retrieves details of a specific deployment.

    - **Create Deployment**:
      ```bash
      odin fleet deployments create --location=<location_id> --config=<config_id> [--other-options]
      ```
      Creates a new deployment with the specified location and configuration.

    - **Update Deployment**:
      ```bash
      odin fleet deployments update <deployment_id> --config=<new_config_id> [--other-options]
      ```
      Updates an existing deployment with new settings.

    - **Delete Deployment**:
      ```bash
      odin fleet deployments delete <deployment_id> --force
      ```
      Deletes the specified deployment.

### 4. `odin fleet.locations`

Manage locations within ODIN Fleet.

- **List Locations**:
  ```bash
  odin fleet locations list
  ```
  Lists all locations available in ODIN Fleet.

- **Get Location Details**:
  ```bash
  odin fleet locations get <location_id>
  ```
  Retrieves details about a specific location.

### 5. `odin fleet.deployments`

Manage deployments for applications.

- **List Deployments**:
  ```bash
  odin fleet deployments list
  ```
  Lists all deployments configured in the fleet.

- **Get Deployment Details**:
  ```bash
  odin fleet deployments get <deployment_id>
  ```
  Retrieves details of a specific deployment.

- **Create Deployment**:
  ```bash
  odin fleet deployments create --location=<location_id> --config=<config_id> [--other-options]
  ```
  Creates a new deployment with the specified settings.

- **Update Deployment**:
  ```bash
  odin fleet deployments update <deployment_id> --config=<new_config_id> [--other-options]
  ```
  Updates an existing deployment.

- **Delete Deployment**:
  ```bash
  odin fleet deployments delete <deployment_id> --force
  ```
  Deletes the specified deployment.

## Examples

### Example 1: Listing Server IPs and Ports

```bash
odin fleet servers list --format="value[separator=':'](addr,ports['Game Port'].publishedPort)"
```

Output:

```
51.77.85.52:30097
51.77.85.52:30214
```

### Example 2: Displaying Configurations in Table Format

```bash
odin fleet configs list --format="table(id,name,env[0].key,env[0].value)"
```

Output:

```
| id | name                 | env[0].key | env[0].value |
|----|----------------------|------------|--------------|
| 16 | Minecraft Production | EULA       | true         |
```

### Example 3: Flattening Output with Custom Separator

```bash
odin fleet servers list --format="flattened[separator='->'](id,name)"
```

Output:

```
id->12345
name->MyServer
```

### Example 4: Outputting Values Only with Custom Separator

```bash
odin fleet servers list --format="value[separator=':'](id,name)"
```

Output:

```
12345:MyServer
```

## Conclusion

This documentation provides an extensive overview and detailed instructions for using the ODIN CLI. The flexibility in
output formatting, combined with comprehensive command options, makes the ODIN CLI a powerful tool for managing your
game server hosting services. For more detailed API documentation, refer to the
official [API documentation](https://fleet.4players.io/docs/api).
