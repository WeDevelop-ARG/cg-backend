/* eslint-env jest */
import isAuthenticated from '../requireAuth'
import { isFunction } from 'lodash'
jest.mock('lodash')

const fakeObj = {}
const fakeUser = { id: '1234 ' }
const fakeContext = { currentUser: fakeUser }

isFunction.mockImplementation(() => false)

test('isAuthenticated should not throw', () => {
  return expect(() => { isAuthenticated(fakeObj, {}, fakeContext) }).not.toThrow()
})

test('isAuthenticated should throw', () => {
  return expect(() => { isAuthenticated(fakeObj, {}, {}) }).toThrowError('Must be authenticated')
})
