import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as Listr from 'listr'

import {createAccessKey} from '../api/create-access-key'
import {createStack} from '../api/create-stack'
import {fetchInfo} from '../api/fetch-info'
import commonFlags from '../common-flags'

export default class Create extends Command {
  static description = 'create CloudFormation stacks for WP Offload Media (with access keys)'

  static examples = [
    '$ wpom create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
    '$ npx @itinerisltd/wpom-cli create --site-key my-awsome-site --endpoint-base https://xxx.execute-api.yyy.amazonaws.com/zzz --api-key xxxyyyzzz',
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

    const result: any = {}

    const tasks = new Listr([
      {
        title: 'Create stack',
        task: async ctx => {
          const stack = await createStack(endpointBase, siteKey, apiKey)
          ctx.stackName = stack.StackName
          result.stackName = stack.StackName
          result.stack = stack
        },
      },
      {
        title: 'Sleep 120 seconds',
        task: async () => cli.wait(120000),
      },
      {
        title: 'Fecth stack info',
        task: async ctx => {
          // TODO: Retry if fail.
          const info = await fetchInfo(endpointBase, ctx.stackName, apiKey)
          result.info = info
        }
      },
      {
        title: 'Create ProductionIAMUser access key',
        task: async ctx => {
          const accessKey = await createAccessKey(endpointBase, ctx.stackName, 'ProductionIAMUser', apiKey)
          result.production.accessKey = accessKey
        }
      },
      {
        title: 'Create StagingIAMUser access key',
        task: async ctx => {
          const accessKey = await createAccessKey(endpointBase, ctx.stackName, 'StagingIAMUser', apiKey)
          result.staging.accessKey = accessKey
        }
      },
    ])

    tasks.run().then(() => {
      this.log(result)
    }).catch((err: Error) => {
      this.error(err.message, {exit: 1})
    })
  }
}
