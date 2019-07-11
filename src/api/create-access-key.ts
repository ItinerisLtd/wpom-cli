import fetch from 'node-fetch'

export const createAccessKey = async (endpointBase: string, stackName: string, logicalResourceId: string, apiKey: string) => {
  const response = await fetch(`${endpointBase}/stacks/${stackName}/access-keys/${logicalResourceId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  }).then(response => response)

  const json = await response.json()

  if (! response.ok) {
    const err = new Error()
    err.name = response.statusText
    err.message = JSON.stringify(json, null, 2)
    throw err
  }

  return json
}
