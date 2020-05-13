/* eslint-env jest */
import models from '~/src/models'
import { getProducts, getProductById, getPhotos, createProduct } from '../'
jest.mock('../../../models')

test('getProducts', () => {
  const fakeReturnValue = {}
  models.product.findAll.mockReturnValueOnce(fakeReturnValue)

  expect(getProducts()).toBe(fakeReturnValue)
  models.product.findAll.mockReset()
})

describe('getProductById', () => {
  const fakeReturnValue = {}
  const fakeId = '1234'
  let result
  beforeEach(() => {
    models.product.findByPk.mockReturnValueOnce(fakeReturnValue)
    result = getProductById(fakeId)
  })
  afterEach(() => {
    models.product.findByPk.mockReset()
  })

  test('result should be fakeReturnValue', () => {
    expect(result).toBe(fakeReturnValue)
  })
  test('should be called once', () => {
    expect(models.product.findByPk).toHaveBeenCalledWith(fakeId)
  })
})

describe('getPhotos', () => {
  const fakeReturnValue = {}
  const obj = { getProductPhotos: jest.fn(() => fakeReturnValue) }
  let result

  beforeEach(() => {
    result = getPhotos(obj)
  })

  afterEach(() => {
    obj.getProductPhotos.mockReset()
  })

  test('result should be fakeReturnValue', () => {
    expect(result).toBe(fakeReturnValue)
  })

  test('should be called once', () => {
    expect(obj.getProductPhotos).toBeCalledTimes(1)
  })
})

describe('createProduct', () => {
  const fakeReturnValue = {}
  const fakeObj = {}
  const fakeInput = { input: fakeObj }
  let result

  beforeEach(() => {
    models.product.create.mockReturnValueOnce(fakeReturnValue)
    result = createProduct(null, fakeInput)
  })
  afterEach(() => {
    models.product.create.mockReset()
  })

  test('should be fakeReturn', () => {
    expect(result).toBe(fakeReturnValue)
  })
  test('should be called with fakeObj', () => {
    expect(models.product.create).toHaveBeenCalledWith(fakeObj)
  })
})
