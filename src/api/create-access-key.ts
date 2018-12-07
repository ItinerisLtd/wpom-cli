import fetch from 'node-fetch'

export const createAccessKey = async (endpointBase: string, stackName: string, apiKey: string) => {
  const response = await fetch(`${endpointBase}/stacks/${stackName}/access-keys`, {
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
    err.message = json
    throw err
  }

  return json
}
