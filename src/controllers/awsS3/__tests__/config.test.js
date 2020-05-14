/* eslint-env jest */
import { accessKeyId, s3Bucket, secretAccessKey } from '../config'

describe('AWS enviroments variables', () => {
  test('Access key must be defined', () => {
    expect(accessKeyId).toBeDefined()
  })

  test('S3 bucket must be defined', () => {
    expect(s3Bucket).toBeDefined()
  })

  test('Secret access must be defined', () => {
    expect(secretAccessKey).toBeDefined()
  })
})
