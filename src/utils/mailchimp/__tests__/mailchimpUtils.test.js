/* eslint-env jest */
import faker from 'faker'
import connection, { ENDPOINT } from '../httpConnection'
import format from '../format'
import mailchimp from '../'

jest.mock('../format')
jest.mock('../httpConnection')

const fakeEmail = faker.internet.email()
const fakeId = faker.random.uuid()
const fakeResult = { id: fakeId, email: fakeEmail }
const fakePostResult = { data: fakeResult }

describe('addMember ok', () => {
  let result
  beforeEach(() => {
    connection.post.mockReturnValueOnce(fakePostResult)
    format.response.mockReturnValueOnce(fakeResult)
    result = mailchimp.addMember(fakeEmail)
  })
  afterEach(() => {
    connection.post.mockReset()
    format.response.mockReset()
  })

  test('should behave correctly', () => {
    return expect(result).resolves.toBe(fakeResult)
  })
  test('format.response should be called', () => {
    expect(format.response).toHaveBeenCalledWith(fakeResult)
  })
  test('connection.post should be called', () => {
    expect(connection.post).toHaveBeenCalledWith(ENDPOINT.AUDIENCE, { email_address: fakeEmail, status: 'subscribed' })
  })
})

describe('addMember not ok', () => {
  afterEach(() => {
    connection.post.mockReset()
    format.response.mockReset()
  })

  test('should reject', () => {
    connection.post.mockImplementation(() => { throw new Error() })
    return expect(mailchimp.addMember(fakeEmail)).rejects.toThrow()
  })
  test('response should not be called', () => {
    return expect(format.response).not.toHaveBeenCalled()
  })
})

describe('getAllMembers ok', () => {
  const fakeMap = jest.fn()
  const fakeGetResult = { data: { members: { map: fakeMap } } }
  let result
  beforeEach(() => {
    connection.get.mockReturnValueOnce(fakeGetResult)
    fakeMap.mockReturnValueOnce(fakeResult)
    result = mailchimp.getAllMembers(fakeEmail)
  })
  afterEach(() => {
    connection.get.mockReset()
    fakeMap.mockReset()
  })

  test('should behave correctly', () => {
    return expect(result).resolves.toBe(fakeResult)
  })
  test('connection.get should be called', () => {
    expect(connection.get).toHaveBeenCalledWith(ENDPOINT.AUDIENCE)
  })
  test('fakeMap should be called', () => {
    expect(fakeMap).toHaveBeenCalled()
  })
})
