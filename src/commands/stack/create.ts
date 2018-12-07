import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {createStack} from '../../api/create-stack'

export default class Create extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    domainName: flags.string({char: 'd', description: 'domain name', required: true}),
    endpointBase: flags.string({char: 'e', description: 'endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]', required: true}),
    key: flags.string({char: 'k', description: 'api key', required: true}),
  }

  async run() {
    const {flags} = this.parse(Create)
    const {endpointBase, domainName, key} = flags

    cli.action.start('Create user access key')
    const stack = await createStack(endpointBase, domainName, key)
      .catch((err: Error) => {
        cli.action.stop(err.name)
        console.error(err.message)
        this.exit(1)
      })
    cli.action.stop()

    console.log(stack)
  }
}
