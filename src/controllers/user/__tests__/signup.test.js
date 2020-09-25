/* eslint-env jest */
import faker from 'faker'
import signup from '../signup'
import { user as userModel } from '~/src/models'
import cognitoService from '../cognito'

jest.mock('../cognito')
jest.mock('../../../models')

describe('User Signup', () => {
  const fakeUser = {
    email: faker.internet.email(),
    name: faker.name.firstName()
  }

  let user

  beforeAll(async () => {
    userModel.create.mockReturnValueOnce(fakeUser)
    cognitoService.authenticate.mockReturnValueOnce({
      idToken: {
        jwtToken: faker.random.uuid()
      }
    })

    cognitoService.addUser.mockReturnValueOnce(fakeUser)

    user = await signup(
      { email: fakeUser.email, password: faker.internet.password(), name: faker.name.firstName() },
      { userModel, cognitoService }
    )
  })

  test('Signup should return an user', () => {
    expect(user).toBeDefined()
  })

  test('Signup should return a token', () => {
    expect(user).toHaveProperty('token')
  })

  test('Signup should return user email', () => {
    expect(user).toHaveProperty('email')
  })

  test('Signup should return user name', () => {
    expect(user).toHaveProperty('name')
  })

  test('Signup should not return password', () => {
    expect(user).not.toHaveProperty('password')
  })

  afterAll(() => {
    user.findOne.mockReset()
    cognitoService.authenticate.mockReset()
  })
})
