import {flags} from '@oclif/command'

const commonFlags = {
  help: flags.help({char: 'h'}),
  'endpoint-base': flags.string({
    char: 'e',
    description: 'endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/zzz]',
    env: 'WPOM_ENDPOINT_BASE',
    required: true,
  }),
  'api-key': flags.string({
    char: 'k',
    description: 'api key',
    env: 'WPOM_API_KEY',
    required: true,
  }),
}

export default commonFlags
