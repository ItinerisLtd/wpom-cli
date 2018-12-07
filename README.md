@itinerisltd/wpom-cli
=================

Manage WP Offload Media Stack

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@itinerisltd/wpom-cli.svg)](https://npmjs.org/package/@itinerisltd/wpom-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@itinerisltd/wpom-cli.svg)](https://npmjs.org/package/@itinerisltd/wpom-cli)
[![License](https://img.shields.io/npm/l/@itinerisltd/wpom-cli.svg)](https://github.com/itinerisltd/wpom/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @itinerisltd/wpom-cli
$ wpom COMMAND
running command...
$ wpom (-v|--version|version)
@itinerisltd/wpom-cli/0.1.4 darwin-x64 node-v10.13.0
$ wpom --help [COMMAND]
USAGE
  $ wpom COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wpom create`](#wpom-create)
* [`wpom help [COMMAND]`](#wpom-help-command)
* [`wpom secret:create`](#wpom-secretcreate)
* [`wpom stack:create`](#wpom-stackcreate)
* [`wpom stack:info`](#wpom-stackinfo)

## `wpom create`

describe the command here

```
USAGE
  $ wpom create

OPTIONS
  -d, --domainName=domainName      (required) domain name
  -e, --endpointBase=endpointBase  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]
  -h, --help                       show CLI help
  -k, --key=key                    (required) api key
```

_See code: [src/commands/create.ts](https://github.com/itinerisltd/wpom/blob/v0.1.4/src/commands/create.ts)_

## `wpom help [COMMAND]`

display help for wpom

```
USAGE
  $ wpom help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `wpom secret:create`

describe the command here

```
USAGE
  $ wpom secret:create

OPTIONS
  -e, --endpointBase=endpointBase  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]
  -h, --help                       show CLI help
  -k, --key=key                    (required) api key
  -n, --name=name                  (required) stack name with prefix
```

_See code: [src/commands/secret/create.ts](https://github.com/itinerisltd/wpom/blob/v0.1.4/src/commands/secret/create.ts)_

## `wpom stack:create`

describe the command here

```
USAGE
  $ wpom stack:create

OPTIONS
  -d, --domainName=domainName      (required) domain name
  -e, --endpointBase=endpointBase  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]
  -h, --help                       show CLI help
  -k, --key=key                    (required) api key
```

_See code: [src/commands/stack/create.ts](https://github.com/itinerisltd/wpom/blob/v0.1.4/src/commands/stack/create.ts)_

## `wpom stack:info`

describe the command here

```
USAGE
  $ wpom stack:info

OPTIONS
  -e, --endpointBase=endpointBase  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]
  -h, --help                       show CLI help
  -k, --key=key                    (required) api key
  -n, --name=name                  (required) stack name with prefix
```

_See code: [src/commands/stack/info.ts](https://github.com/itinerisltd/wpom/blob/v0.1.4/src/commands/stack/info.ts)_
<!-- commandsstop -->
