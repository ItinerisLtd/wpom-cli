import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {fetchInfo} from '../../api/fetch-info'

export default class Info extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'stack name with prefix', required: true}),
    endpointBase: flags.string({char: 'e', description: 'endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]', required: true}),
    key: flags.string({char: 'k', description: 'api key', required: true}),
  }

  async run() {
    const {flags} = this.parse(Info)
    const {endpointBase, name, key} = flags

    cli.action.start('Fecth stack info')
    const info = await fetchInfo(endpointBase, name, key)
      .catch((err: Error) => {
        cli.action.stop(err.name)
        console.error(err)
        this.exit(1)
      })
    cli.action.stop()

    console.log(info)
  }
}
