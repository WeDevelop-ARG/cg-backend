/* eslint-env jest */
import models from '~/src/models'
import * as groupController from '../'
jest.mock('../../../models')

test('getGroups', () => {
  const fakeResult = {}
  models.group.findAll.mockReturnValueOnce(fakeResult)
  expect(groupController.getGroups()).toBe(fakeResult)
  models.group.findAll.mockReset()
})

describe('getGroupById', () => {
  const fakeReturnValue = {}
  const fakeId = '1234'
  const fakeInput = { id: fakeId }
  let result

  beforeEach(() => {
    models.group.findByPk.mockReturnValueOnce(fakeReturnValue)
    result = groupController.getGroupById(null, fakeInput, { models })
  })
  afterEach(() => {
    models.group.findByPk.mockReset()
  })

  test('result should be fakeReturnValue', () => {
    return expect(result).resolves.toBe(fakeReturnValue)
  })
  test('should be called with fakeId', () => {
    expect(models.group.findByPk).toHaveBeenCalledWith(fakeId)
  })
})

test('getGroupById should throw', () => {
  const fakeId = '1234'
  const fakeInput = { id: fakeId }
  models.group.findByPk.mockImplementation(() => { throw new Error() })
  expect(groupController.getGroupById(null, fakeInput, { models })).rejects.toEqual(Error())
  models.group.findByPk.mockReset()
})

describe('getProduct', () => {
  const fakeReturnValue = {}
  const obj = { getProduct: jest.fn(() => fakeReturnValue) }
  let result

  beforeEach(() => {
    result = groupController.getProduct(obj)
  })

  afterEach(() => {
    obj.getProduct.mockReset()
  })

  test('result should be fakeReturnValue', () => {
    expect(result).toBe(fakeReturnValue)
  })

  test('should be called once', () => {
    expect(obj.getProduct).toHaveBeenCalledTimes(1)
  })
})

describe('isCurrentUserSubscribed', () => {
  const fakeUser = { id: '1234' }
  const fakeContext = { models: models, currentUser: fakeUser }
  const fakeGroup = { id: '4321' }
  let result = groupController.isCurrentUserSubscribed(fakeGroup, null, fakeContext)

  describe('should be subscribed', () => {
    beforeEach(() => {
      models.groupSubscription.count.mockReturnValueOnce(1)
      result = groupController.isCurrentUserSubscribed(fakeGroup, null, fakeContext)
    })
    afterEach(() => {
      models.groupSubscription.count.mockReset()
    })

    test('result should be true', () => {
      return expect(result).resolves.toEqual(true)
    })
    test('count should be called with', () => {
      expect(models.groupSubscription.count).toHaveBeenCalledWith({ where: { groupId: fakeGroup.id, userId: fakeUser.id } })
    })
  })

  describe('should not be subscribed', () => {
    beforeEach(() => {
      models.groupSubscription.count.mockReturnValueOnce(0)
      result = groupController.isCurrentUserSubscribed(fakeGroup, null, fakeContext)
    })
    afterEach(() => {
      models.groupSubscription.count.mockReset()
    })

    test('result should be false', () => {
      return expect(result).resolves.toEqual(false)
    })
    test('count should be called', () => {
      expect(models.groupSubscription.count).toHaveBeenCalledWith({ where: { groupId: fakeGroup.id, userId: fakeUser.id } })
    })
  })

  describe('user is not logged', () => {
    beforeEach(() => {
      result = groupController.isCurrentUserSubscribed(fakeGroup, null, {})
    })

    test('res should be false', () => {
      return expect(result).resolves.toEqual(false)
    })
    test('count should not be called', () => {
      expect(models.groupSubscription.count).not.toHaveBeenCalled()
    })
  })
})

describe('getParticipantsCount', () => {
  const fakeGroup = { id: '1234' }
  const fakeContext = { models: models }
  let result

  beforeEach(() => {
    models.groupSubscription.count.mockReturnValueOnce(5)
    result = groupController.getParticipantsCount(fakeGroup, null, fakeContext)
  })
  afterEach(() => {
    models.groupSubscription.count.mockReset()
  })

  test('result should match', () => {
    expect(result).toBe(5)
  })
  test('count should be called with', () => {
    expect(models.groupSubscription.count).toBeCalledWith({ where: { groupId: fakeGroup.id } })
  })
})

describe('createGroup', () => {
  const fakeProdId = '1432'
  const fakeProdPhotos = []
  const fakeProd = { id: fakeProdId, productPhotosUrls: fakeProdPhotos }
  const fakeUser = { id: '1234' }
  const fakeTransaction = jest.fn(x => x('t')).mockName('fakeTransaction')
  const groupCreate = jest.fn()
  const prodCreate = jest.fn()
  const fakeModels = { group: { create: groupCreate }, product: { create: prodCreate } }
  const fakeContext = { models: fakeModels, currentUser: fakeUser, sequelize: { transaction: fakeTransaction } }
  const fakeGroup = { id: '4321' }
  const fakeResult = {}
  let result

  beforeEach(() => {
    groupCreate.mockReturnValue(fakeGroup)
    prodCreate.mockReturnValueOnce(fakeProd)
    models.productPhoto.bulkCreate.mockReturnValue(fakeResult)
  })
  afterEach(() => {
    groupCreate.mockReset()
    prodCreate.mockReset()
    models.productPhoto.bulkCreate.mockReset()
  })

  describe('Product does exists', () => {
    const fakeInput = { input: { productId: fakeProdId } }
    beforeEach(() => {
      result = groupController.createGroup(null, fakeInput, fakeContext)
    })

    test('should behave correctly', () => {
      return expect(result).resolves.toBe(fakeGroup)
    })
    test('group create should have been called', () => {
      expect(groupCreate).toHaveBeenCalledWith({ ...fakeInput.input, sellerId: fakeUser.id }, { transaction: 't' })
    })
    test('product create should not have been called', () => {
      expect(prodCreate).not.toHaveBeenCalled()
    })
    test('productPhoto bulkCreateshould should not have been called', () => {
      expect(models.productPhoto.bulkCreate).not.toHaveBeenCalled()
    })
  })

  describe('Product does not exists', () => {
    const fakeInput = { input: { product: fakeProd } }
    beforeEach(() => {
      result = groupController.createGroup(null, fakeInput, fakeContext)
    })

    test('should create correctly', () => {
      return expect(result).resolves.toBe(fakeGroup)
    })
    test('group create should have been called', () => {
      expect(groupCreate).toHaveBeenCalledWith({ ...fakeInput.input, productId: fakeProdId, sellerId: fakeUser.id }, { transaction: 't' })
    })
    test('product create should be called once', () => {
      expect(prodCreate).toHaveBeenCalledWith(fakeProd, { transaction: 't' })
    })
    test('productPhoto bulkCreateshould have been called', () => {
      expect(models.productPhoto.bulkCreate).toHaveBeenCalledWith(fakeProdPhotos, { transaction: 't' })
    })
  })
})

describe('deleteGroup', () => {
  const fakeGroupId = '1234'
  const fakeProdId = '4321'
  const fakeGroup = { id: fakeGroupId, productId: fakeProdId, expiresAt: new Date() + 1 }
  const fakeTransaction = jest.fn(x => x('t')).mockName('fakeTransaction')
  const groupSubDestroy = jest.fn()
  const prodDestroy = jest.fn()
  const prodPhotoDestroy = jest.fn()
  const groupFindByPk = jest.fn()
  const groupSubCount = jest.fn()
  const groupDestroy = jest.fn()
  const fakeModels = {
    groupSubscription: { destroy: groupSubDestroy, count: groupSubCount },
    productPhoto: { destroy: prodPhotoDestroy },
    product: { destroy: prodDestroy },
    group: { destroy: groupDestroy, findByPk: groupFindByPk }
  }
  const fakeContext = { models: fakeModels, sequelize: { transaction: fakeTransaction } }
  const fakeInput = { id: fakeGroupId }
  let result

  beforeAll(() => {
    groupSubDestroy.mockReturnValueOnce(true)
    prodDestroy.mockReturnValueOnce(true)
    prodPhotoDestroy.mockReturnValueOnce(true)
    groupDestroy.mockReturnValueOnce(true)
    groupFindByPk.mockReturnValue(fakeGroup)
  })

  describe('should delete group', () => {    
    beforeAll(() => {
      groupSubCount.mockReturnValueOnce(0)
      result = groupController.deleteGroup(null, fakeInput, fakeContext)
    })
    afterAll(() => {
      jest.clearAllMocks()
    })

    test('delete group works correctly', () => {
      return expect(result).resolves.toBe(1)
    })
    test('groupSubDestroy should run only once', () => {
      expect(groupSubDestroy).toBeCalledTimes(1)
    })
    test('groupDestroy should run only once', () => {
      expect(groupDestroy).toBeCalledTimes(1)
    })
    test('prodPhotoDestroy should run only once', () => {
      expect(prodPhotoDestroy).toBeCalledTimes(1)
    })
    test('prodDestroy should run only once', () => {
      expect(prodDestroy).toBeCalledTimes(1)
    })
  })

  describe('should not delete group', () => {
    let result
    beforeAll(() => {
      groupSubCount.mockReturnValueOnce(10)
      result = groupController.deleteGroup(null, fakeInput, fakeContext)
    })
    afterAll(() => {
      jest.clearAllMocks()
    })

    test('delete group works correctly', () => {
      return expect(result).rejects.toThrowError('Group can\'t be deleted')
    })
    test('groupSubDestroy should not be called', () => {
      expect(groupSubDestroy).not.toHaveBeenCalled()
    })
    test('groupDestroy should not be called', () => {
      expect(groupDestroy).not.toHaveBeenCalled()
    })
    test('prodPhotoDestroy should not be called', () => {
      expect(prodPhotoDestroy).not.toHaveBeenCalled()
    })
    test('prodDestroy should not be called', () => {
      expect(prodDestroy).not.toHaveBeenCalled()
    })
  })
})
