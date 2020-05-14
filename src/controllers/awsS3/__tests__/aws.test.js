/* eslint-env jest */
import signFile from '../signFile'
import faker from 'faker'

describe('Create S3 signsed file', () => {
  const fakerFile = {
    filename: 'test',
    filetype: '.png'
  }

  const s3Bucket = 'faker'
  const S3 = {
    getSignedUrl: jest.fn(() => faker.internet.url)
  }

  let signed

  beforeAll(async () => {
    signed = await signFile(fakerFile, { S3, s3Bucket })
  })

  test('signedRequest is define', () => {
    expect(signed.signedRequest).toBeDefined()
  })

  test('url is define', () => {
    expect(signed.url).toBeDefined()
  })
})
