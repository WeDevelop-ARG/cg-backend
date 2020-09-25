/* eslint-env jest */
import isGroupOwner from '../isGroupOwner'
jest.mock('../../models')

const fakeGroupId = '1234'
const fakeInput = { id: fakeGroupId }
const fakeUser = { id: '4321' }
const fakeGroupFind = jest.fn()
const fakeModels = { group: { findByPk: fakeGroupFind } }
const fakeContext = { models: fakeModels, currentUser: fakeUser }

test('isGroupOwner should be right', async () => {
  const fakeGroup = { id: fakeGroupId, sellerId: fakeUser.id }
  fakeGroupFind.mockReturnValueOnce(fakeGroup)
  await expect(isGroupOwner(null, fakeInput, fakeContext)).resolves.not.toThrow()
  fakeGroupFind.mockReset()
})

test('isGroupOwner with different sellerId should throw', async () => {
  const fakeGroup = { id: fakeGroupId, sellerId: '' }
  fakeGroupFind.mockReturnValueOnce(fakeGroup)
  await expect(isGroupOwner(null, fakeInput, fakeContext)).rejects.toThrowError('Must be group seller')
  fakeGroupFind.mockReset()
})

test('isGroupOwner with no args.id should throw', async () => {
  fakeGroupFind.mockReturnValueOnce({})
  await expect(isGroupOwner(null, fakeInput, fakeContext)).rejects.toThrowError('Must be group seller')
  fakeGroupFind.mockReset()
})
