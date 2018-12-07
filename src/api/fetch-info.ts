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
    err.message = json
    throw err
  }

  const {Distribution, S3Bucket, IAMUser} = json

  const {Id: DistributionId,
    Status: DistributionStatus,
    DomainName: DistributionDomainName,
  } = Distribution
  const cloudfront = {DistributionId, DistributionStatus, DistributionDomainName}

  const {PhysicalResourceId: BucketId,
    ResourceStatus: BucketStatus,
  } = S3Bucket.StackResourceDetail
  const bucket = {BucketId, BucketStatus}

  const {PhysicalResourceId: UserId,
    ResourceStatus: UserStatus,
  } = IAMUser.StackResourceDetail
  const user = {UserId, UserStatus}

  return {
    ...bucket,
    ...user,
    ...cloudfront,
  }
}
