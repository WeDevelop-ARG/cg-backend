/* eslint-env jest */
import getUser from '../getDecodedUser'
import { user as User } from '~/src/models'
jest.mock('../../models')

const fakeUser = { id: '1234' }
const fakeDecodedJWTWrongPayload = { payload: null }
const fakeDecodedJWTWrongEmail = { payload: { email: null } }
const fakeDecodedJWT = { payload: { email: 'fakeEmail' } }

beforeEach(() => {
  User.findOne.mockImplementation(() => fakeUser)
})

afterEach(() => {
  User.findOne.mockReset()
})

test('getUser {} should return null', () => {
  expect(getUser({})).toBe(null)
})
test('getUser wrong payload should return null', () => {
  expect(getUser(fakeDecodedJWTWrongPayload)).toBe(null)
})
test('getUser wrong email should return null', () => {
  expect(getUser(fakeDecodedJWTWrongEmail)).toBe(null)
})
describe('getUser ok', () => {
  let result  
  beforeEach(() => {
    result = getUser(fakeDecodedJWT)
  })
  
  test('getUser shold return ok', () => {
    expect(result).toBe(fakeUser)
  })
  test('userFind should be called', () => {
    expect(User.findOne).toBeCalledWith({ where: fakeDecodedJWT.payload })
  })
})
