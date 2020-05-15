/* eslint-env jest */
import mailchimp from '~/src/utils/mailchimp'
import { subscribe } from '../'
jest.mock('../../../utils/mailchimp')

describe('subscribe', () => {
  const fakeEmail = 'test@test.com'
  const fakeEmailObj = { email: fakeEmail }
  const fakeInput = { input: fakeEmailObj }
  const fakeResult = {}
  let result

  beforeEach(() => {
    mailchimp.addMember.mockReturnValueOnce(fakeResult)
    result = subscribe(null, fakeInput)
  })
  afterEach(() => {
    mailchimp.addMember.mockReset()
  })

  test('should return fakeResult', () => {
    expect(result).toBe(fakeResult)
  })
  test('should have been called with right params', () => {
    expect(mailchimp.addMember).toHaveBeenCalledWith(fakeEmail)
  })
})
