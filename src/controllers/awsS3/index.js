import AWS from 'aws-sdk'
const s3 = new AWS.S3()

s3.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY
})

export const createSignedFileUploadURL = async (obj, { input: { filename, filetype } }) => {
  const s3Bucket = process.env.AWS_BUCKET

  const s3Params = {
    Bucket: s3Bucket,
    Key: filename,
    Expires: 60,
    ContentType: filetype,
    ACL: 'public-read'
  }

  const signedRequest = await s3.getSignedUrl('putObject', s3Params)
  const url = `https://${s3Bucket}.s3.amazonaws.com/images/${filename}`

  return {
    signedRequest,
    url
  }
}
