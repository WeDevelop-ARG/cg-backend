require('dotenv').config()

const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_ACCESS_KEY
const s3Bucket = process.env.AWS_BUCKET

export { accessKeyId, secretAccessKey, s3Bucket }
