export default async ({ filetype, filename }, { s3Bucket, S3 }) => {
  const s3Params = {
    Bucket: s3Bucket,
    Key: `images/${filename}`,
    Expires: 60,
    ContentType: filetype,
    ACL: 'public-read'
  }

  const signedRequest = await S3.getSignedUrl('putObject', s3Params)
  const url = `https://${s3Bucket}.s3.amazonaws.com/images/${filename}`

  return {
    signedRequest,
    url
  }
}
