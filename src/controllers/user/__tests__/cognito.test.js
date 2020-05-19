/* eslint-env jest */
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from '../user-pool'
import * as cognito from '../cognito'
import faker from 'faker'
jest.mock('../user-pool')
jest.mock('amazon-cognito-identity-js')

const fakeId = faker.random.uuid()
const fakeEmail = faker.internet.email()
const fakePassword = faker.internet.password()
const fakeAuth = jest.fn()
const fakeCognitoUser = { Username: fakeEmail, authenticateUser: fakeAuth }
const fakeAuthDetails = { Username: fakeEmail, Password: fakePassword }
const fakeResult = { id: fakeId, ...fakeAuthDetails }
const fakeErr = { error: 'Invalid Credentials' }

describe('authenticate ok', () => {
  let result
  beforeEach(() => {
    CognitoUser.mockImplementationOnce(() => fakeCognitoUser)
    AuthenticationDetails.mockImplementationOnce(() => fakeAuthDetails)
    fakeAuth.mockImplementationOnce((param1, param2) => param2.onSuccess(fakeResult))
    result = cognito.authenticate(fakeEmail, fakePassword)
  })

  afterEach(() => {
    fakeAuth.mockReset()
    CognitoUser.mockReset()
    AuthenticationDetails.mockReset()
  })

  test('should behave correctly', () => {
    return expect(result).resolves.toBe(fakeResult)
  })
  test('CognitoUser should be called', () => {
    expect(CognitoUser).toHaveBeenCalledWith({ Username: fakeEmail, Pool: UserPool })
  })
  test('AuthenticationDetails should be called', () => {
    expect(AuthenticationDetails).toHaveBeenCalledWith({ Username: fakeEmail, Password: fakePassword })
  })
  test('fakeAuth should be called', () => {
    expect(fakeAuth.mock.calls[0]).toContain(fakeAuthDetails)
  })
})

describe('authenticate wrong', () => {
  afterAll(() => {
    fakeAuth.mockReset()
    CognitoUser.mockReset()
    AuthenticationDetails.mockReset()
  })

  test('should throw', () => {
    CognitoUser.mockImplementationOnce(() => fakeCognitoUser)
    AuthenticationDetails.mockImplementationOnce(() => fakeAuthDetails)
    fakeAuth.mockImplementationOnce((param1, param2) => param2.onFailure())
    return expect(cognito.authenticate(fakeEmail, fakePassword)).rejects.toThrow()
  })
})

describe('addUser ok', () => {
  let result
  beforeEach(() => {
    UserPool.signUp.mockImplementationOnce((a, b, c, d, func) => func(null, fakeResult))
    result = cognito.addUser(fakeEmail, fakePassword)
  })
  afterEach(() => {
    UserPool.signUp.mockReset()
  })

  test('should behave correctly', () => {
    return expect(result).resolves.toBe(fakeResult)
  })
  test('UserPool.signUp should be called', () => {
    expect(UserPool.signUp).toHaveBeenCalledWith(fakeEmail, fakePassword, [], null, expect.any(Function))
  })
})

describe('addUser wrong', () => {
  afterAll(() => {
    UserPool.signUp.mockReset()
  })
  test('addUser wrong', () => {
    UserPool.signUp.mockImplementationOnce((a, b, c, d, func) => func(fakeErr, fakeResult))
    return expect(cognito.addUser(fakeEmail, fakePassword)).rejects.toBe(fakeErr)
  })
})

test('getCurrentUserPool should behave correctly', () => {
  UserPool.getCurrentUser.mockImplementationOnce(() => fakeResult)
  expect(cognito.getCurrentUserPool()).toBe(fakeResult)
  UserPool.getCurrentUser.mockReset()
})

describe('getCurrentUser ok', () => {
  const fakeGetSession = jest.fn()
  const fakeUser = { ...fakeResult, getSession: fakeGetSession }
  const fakeSession = { idToken: { payload: { email: fakeEmail } } }

  afterEach(() => {
    UserPool.getCurrentUser.mockReset()
    fakeGetSession.mockReset()
  })

  test('should be ok', () => {
    UserPool.getCurrentUser.mockImplementationOnce(() => fakeUser)
    fakeGetSession.mockImplementationOnce((func) => func(null, fakeSession))
    return expect(cognito.getCurrentUser()).resolves.toBe(fakeEmail)
  })
  test('should be wrong', () => {
    UserPool.getCurrentUser.mockImplementationOnce(() => fakeUser)
    fakeGetSession.mockImplementationOnce((func) => func(fakeErr, {}))
    return expect(cognito.getCurrentUser()).rejects.toBe(fakeErr)
  })
})
