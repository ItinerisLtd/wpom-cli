import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {fetchInfo} from '../../api/fetch-info'
import commonFlags from '../../common-flags'

export default class Info extends Command {
  static description = 'show CloudFormation stack information'

  static examples = [
    '$ wpom stack:info --stack-name wpom-my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
    '$ npx @itinerisltd/wpom-cli stack:info --stack-name wpom-my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
  ]

  static flags = {
    ...commonFlags,
    'stack-name': flags.string({
      char: 'n',
      description: 'stack name, e.g: i-am-example-123',
      env: 'WPOM_STACK_INFO_STACK_NAME',
      required: true,
    }),
  }

  async run() {
    const {flags} = this.parse(Info)

    const stackName = flags['stack-name']
    const endpointBase = flags['endpoint-base']
    const apiKey = flags['api-key']

    cli.action.start('Fecth stack info')
    const info = await fetchInfo(endpointBase, stackName, apiKey)
      .catch((err: Error) => {
        cli.action.stop(err.name)
        this.error(err.message, {exit: 1})
      })
    cli.action.stop()

    this.log(info)
  }
}
