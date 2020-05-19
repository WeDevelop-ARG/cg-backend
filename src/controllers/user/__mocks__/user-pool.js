/* eslint-env jest */
const fakeSignUp = jest.fn()
const fakeGetCurrentUser = jest.fn()

const fakePool = { name: 'FakePool', signUp: fakeSignUp, getCurrentUser: fakeGetCurrentUser }

export default fakePool
