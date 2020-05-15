/* eslint-env jest */
import faker from 'faker'
import login from '../login'
import { user as userModel } from '~/src/models'
import cognitoService from '../cognito'

jest.mock('../cognito')
jest.mock('../../../models')

describe('User login', () => {
  const fakeUser = {
    email: faker.internet.email(),
    name: faker.name.firstName()
  }

  let user

  beforeAll(async () => {
    userModel.findOrCreate.mockReturnValueOnce([fakeUser])
    cognitoService.authenticate.mockReturnValueOnce({
      idToken: {
        jwtToken: faker.random.uuid()
      }
    })

    user = await login(
      { email: fakeUser.email, password: faker.internet.password() }, { userModel, cognitoService }
    )
  })

  test('Login should return an user', () => {
    expect(user).toBeDefined()
  })

  test('Login should return a token', () => {
    expect(user).toHaveProperty('token')
  })

  test('Login should return user email', () => {
    expect(user).toHaveProperty('email')
  })

  test('Loging should return user name', () => {
    expect(user).toHaveProperty('name')
  })

  test('Login should not return password', () => {
    expect(user).not.toHaveProperty('password')
  })

  test('Return error in case of invalid credentials', () => {
    const fakeCognito = {
      authenticate: jest.fn(() => { throw new Error('Invalid credentials') })
    }
    return expect(login(
      { email: faker.internet.email(), password: faker.internet.password() },
      { cognitoService: fakeCognito, userModel }
    )).rejects.toEqual(Error('Invalid credentials'))
  })

  afterAll(() => {
    user.findOne.mockReset()
    cognitoService.authenticate.mockReset()
  })
})
