import fetch from 'node-fetch'

export const fetchInfo = async (endpointBase: string, stackName: string, apiKey: string) => {
  const response = await fetch(`${endpointBase}/stacks/${stackName}`, {
    method: 'GET',
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
