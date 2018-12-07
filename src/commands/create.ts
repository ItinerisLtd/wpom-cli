import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as Listr from 'listr'

import {createAccessKey} from '../api/create-access-key'
import {createStack} from '../api/create-stack'
import {fetchInfo} from '../api/fetch-info'

export default class Create extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    domainName: flags.string({char: 'd', description: 'domain name', required: true}),
    endpointBase: flags.string({char: 'e', description: 'endpoint base, e.g: https://xxx.execute-api.yyy.amazonaws.com/dev]', required: true}),
    key: flags.string({char: 'k', description: 'api key', required: true}),
  }

  async run() {
    const {flags} = this.parse(Create)
    const {endpointBase, domainName, key} = flags

    const result: any = {}

    const tasks = new Listr([
      {
        title: 'Create stack',
        task: async ctx => {
          const stack = await createStack(endpointBase, domainName, key)
          ctx.stackName = stack.StackName
          result.stackName = stack.StackName
          result.stack = stack
        },
      },
      {
        title: 'Sleep 10 seconds',
        task: async () => cli.wait(10000),
      },
      {
        title: 'Fecth stack info',
        task: async ctx => {
          const info = await fetchInfo(endpointBase, ctx.stackName, key)
          result.info = info
        }
      },
      {
        title: 'Create user access key',
        task: async ctx => {
          const accessKey = await createAccessKey(endpointBase, ctx.stackName, key)
          result.accessKey = accessKey
        }
      },
    ])

    tasks.run().then(() => {
      console.log(result)
    }).catch((err: Error) => {
      console.error(err)
      this.exit(1)
    })
  }
}
