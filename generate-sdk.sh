#!/usr/bin/env bash

# Delete the existing source code
rm -r ./src/api

# Download the current version of the OdinFleet API specification
curl https://api.4np.4players.de/b2b/v1/docs/api.json > ./api.json

# Set the version of the OpenAPI Generator CLI to 7.3.0 - later version currently don't work
openapi-generator-cli version-manager set 7.3.0

# Generate the SDK for the OdinFleet API
openapi-generator-cli generate -i ./api.json -g typescript -o ./src/api --additional-properties=fileNaming=kebab-case,withNodeImports=true,platform=deno --openapi-normalizer SET_TAGS_FOR_ALL_OPERATIONS=App

rm api.json
