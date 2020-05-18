/* eslint-env jest */
import faker from 'faker'
import checkout from '../checkout'
jest.mock('faker')

test('should behave correctly', () => {
  faker.random.alphaNumeric.mockReturnValueOnce(5)
  expect(checkout()).toBe(5)
  faker.random.alphaNumeric.mockReset()
})
