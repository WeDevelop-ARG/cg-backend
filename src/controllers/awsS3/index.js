import signFile from './signFile'
import S3 from './S3'
import { s3Bucket } from './config'

export const createSignedFileUploadURL = async (_, { input: { filename, filetype } }) =>
  signFile({ filename, filetype }, { S3, s3Bucket })
