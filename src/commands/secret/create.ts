import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {createAccessKey} from '../../api/create-access-key'

export default class Create extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'stack name with prefix', required: true}),
    endpointBase: flags.string({char: 'e', description: 'endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]', required: true}),
    key: flags.string({char: 'k', description: 'api key', required: true}),
  }

  async run() {
    const {flags} = this.parse(Create)
    const {endpointBase, name, key} = flags

    cli.action.start('Create user access key')
    const accessKey = await createAccessKey(endpointBase, name, key)
      .catch((err: Error) => {
        cli.action.stop(err.name)
        console.error(err.message)
        this.exit(1)
      })
    cli.action.stop()

    console.log(accessKey)
  }
}
