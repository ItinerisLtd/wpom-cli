import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {createStack} from '../../api/create-stack'
import commonFlags from '../../common-flags'

export default class Create extends Command {
  static description = 'create CloudFormation stacks for WP Offload Media (without access keys)'

  static examples = [
    '$ wpom stack:create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
    '$ npx @itinerisltd/wpom-cli stack:create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
  ]

  static flags = {
    ...commonFlags,
    'site-key': flags.string({
      char: 's',
      description: 'site key, format: ^[a-z0-9\\-]+$, e.g: i-am-example-123',
      env: 'WPOM_STACK_CREATE_SITE_KEY',
      required: true,
    }),
  }

  async run() {
    const {flags} = this.parse(Create)

    const siteKey = flags['site-key']
    const endpointBase = flags['endpoint-base']
    const apiKey = flags['api-key']

    cli.action.start('Create user access key')
    const stack = await createStack(endpointBase, siteKey, apiKey)
      .catch((err: Error) => {
        cli.action.stop(err.name)
        this.error(err.message, {exit: 1})
      })
    cli.action.stop()

    this.log(stack)
  }
}
