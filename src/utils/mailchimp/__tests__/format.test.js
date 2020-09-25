/* eslint-env jest */
import format from '../format'
import faker from 'faker'

const fakeEmail = faker.internet.email()
const fakeId = faker.random.uuid()
const fakeInput = { email_address: fakeEmail, id: fakeId }
const fakeResult = { email: fakeEmail, id: fakeId }

test('should behave correctly', () => {
  expect(format.response(fakeInput)).toEqual(fakeResult)
})
