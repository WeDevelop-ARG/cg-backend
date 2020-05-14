import AWS from 'aws-sdk'
import { accessKeyId, secretAccessKey } from './config'
const S3 = new AWS.S3()

S3.config.update({ accessKeyId, secretAccessKey })

export default S3
