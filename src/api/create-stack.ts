import fetch from 'node-fetch'

export const createStack = async (endpointBase: string, siteKey: string, apiKey: string) => {
  const response = await fetch(`${endpointBase}/stacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      name: siteKey,
    }),
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
