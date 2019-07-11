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
@itinerisltd/wpom-cli/0.2.11 darwin-x64 node-v10.16.0
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
* [`wpom stack:create`](#wpom-stackcreate)
* [`wpom stack:info`](#wpom-stackinfo)

## `wpom create`

create CloudFormation stacks for WP Offload Media (with access keys)

```
USAGE
  $ wpom create

OPTIONS
  -e, --endpoint-base=endpoint-base  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/zzz]
  -h, --help                         show CLI help
  -k, --api-key=api-key              (required) api key
  -s, --site-key=site-key            (required) site key, format: ^[a-z0-9\-]+$, e.g: i-am-example-123

EXAMPLES
  $ wpom create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key 
  xxxyyyzzz
  $ npx @itinerisltd/wpom-cli create --site-key my-awsome-site --endpoint-base 
  https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz
```

_See code: [src/commands/create.ts](https://github.com/itinerisltd/wpom-cli/blob/v0.2.11/src/commands/create.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `wpom stack:create`

create CloudFormation stacks for WP Offload Media (without access keys)

```
USAGE
  $ wpom stack:create

OPTIONS
  -e, --endpoint-base=endpoint-base  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/zzz]
  -h, --help                         show CLI help
  -k, --api-key=api-key              (required) api key
  -s, --site-key=site-key            (required) site key, format: ^[a-z0-9\-]+$, e.g: i-am-example-123

EXAMPLES
  $ wpom stack:create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key 
  xxxyyyzzz
  $ npx @itinerisltd/wpom-cli stack:create --site-key my-awsome-site --endpoint-base 
  https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz
```

_See code: [src/commands/stack/create.ts](https://github.com/itinerisltd/wpom-cli/blob/v0.2.11/src/commands/stack/create.ts)_

## `wpom stack:info`

show CloudFormation stack information

```
USAGE
  $ wpom stack:info

OPTIONS
  -e, --endpoint-base=endpoint-base  (required) endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/zzz]
  -h, --help                         show CLI help
  -k, --api-key=api-key              (required) api key
  -n, --stack-name=stack-name        (required) stack name, e.g: i-am-example-123

EXAMPLES
  $ wpom stack:info --stack-name wpom-my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz 
  --api-key xxxyyyzzz
  $ npx @itinerisltd/wpom-cli stack:info --stack-name wpom-my-awsome-site --endpoint-base 
  https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz
```

_See code: [src/commands/stack/info.ts](https://github.com/itinerisltd/wpom-cli/blob/v0.2.11/src/commands/stack/info.ts)_
<!-- commandsstop -->
