/* eslint-env jest */
/* esling-env jest */
import jwtAuth from '../jwtAuth'
import getUser from '../getDecodedUser'
import jwt from 'jsonwebtoken'
jest.mock('jsonwebtoken')
jest.mock('../../models')
jest.mock('../getDecodedUser')

const fakeAuth = 'xxxxx.yyyyy.zzzzz'
const fakeFail = 'fakeFail'
const fakeUser = { id: '1234' }
const fakeReqWithWrongAuth = { headers: { authorization: ' ' } }
const fakeReqWithAuth = { headers: { authorization: `Bearer ${fakeAuth}` } }
const fakeSendFn = jest.fn().mockImplementation(() => fakeFail)
const fakeStatusFn = jest.fn().mockImplementation(stat => fakeRes)
const fakeRes = { status: fakeStatusFn, send: fakeSendFn }
const fakeNext = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

test('jwtAuth with error should fail', async () => {
  expect(await jwtAuth({}, fakeRes, fakeNext)).toBe(fakeFail)
})

test('jwtAuth with wrong auth should next', async () => {
  await jwtAuth(fakeReqWithWrongAuth, fakeRes, fakeNext)
  expect(fakeNext).toHaveBeenCalled()
})

describe('jwtAuth with wrong decode', () => {
  const fakeReqWithUser = { ...fakeReqWithAuth, user: fakeUser }
  beforeEach(async () => {
    jwt.decode.mockReturnValueOnce(false)
    await jwtAuth(fakeReqWithUser, fakeRes, fakeNext)
  })

  test('should change user to null', () => {
    expect(fakeReqWithUser.user).toBe(null)
  })
  test('should call next', () => {
    expect(fakeNext).toHaveBeenCalled()
  })
})

describe('jwtAuth complete ok', () => {
  const fakeReqWithUser = { ...fakeReqWithAuth, user: '' }

  beforeEach(async () => {
    jwt.decode.mockReturnValueOnce(fakeAuth)
    getUser.mockReturnValueOnce(fakeUser)
    await jwtAuth(fakeReqWithUser, fakeRes, fakeNext)
  })

  test('should change user to null', () => {
    expect(fakeReqWithUser.user).toBe(fakeUser)
  })
  test('getUser should be called', () => {
    expect(jwt.decode).toHaveBeenCalledTimes(1)
  })
  test('getUser should be called', () => {
    expect(getUser).toHaveBeenCalledWith(fakeAuth)
  })
  test('should call next', () => {
    expect(fakeNext).toHaveBeenCalled()
  })
})
