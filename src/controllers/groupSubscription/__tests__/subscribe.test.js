/* eslint-env jest */
import models from '../../../models'
import subscribe from '../subscribe'
jest.mock('../../../models')

describe('subscribe', () => {
  const fakeUserId = '1234'
  const fakeGroupId = '4321'
  const fakeInput = { groupId: fakeGroupId, userId: fakeUserId }
  const fakeResult = {}
  let result

  beforeEach(() => {
    models.groupSubscription.create.mockReturnValueOnce(fakeResult)
    result = subscribe(fakeInput)
  })
  afterEach(() => {
    models.groupSubscription.create.mockReset()
  })

  test('should return fakeResult', () => {
    expect(result).toBe(fakeResult)
  })
  test('should have been called with right params', () => {
    expect(models.groupSubscription.create).toHaveBeenCalledWith(fakeInput)
  })
})
