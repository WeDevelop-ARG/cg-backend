/* eslint-env jest */
import mercadoPagoCheckout from '../checkout'
import subscribeToGroup from '../subscribe'
import { subscribe } from '../'

jest.mock('../checkout')
jest.mock('../subscribe')

const paymentMethod = 'fakePaymentMethod'
const subscriptionData = { fake: 'subscriptionData' }
const fakeInput = { input: { paymentMethod, ...subscriptionData } }
const fakeUserId = '4321'
const fakeCurrentUser = { currentUser: { id: fakeUserId } }
const fakeMercadopagoResult = '1234'
const fakeResult = {}

describe('subscribe resolves', () => {
  let result

  beforeEach(() => {
    mercadoPagoCheckout.mockReturnValueOnce(fakeMercadopagoResult)
    subscribeToGroup.mockResolvedValueOnce(fakeResult)
    result = subscribe(null, fakeInput, fakeCurrentUser)
  })
  afterEach(() => {
    mercadoPagoCheckout.mockReset()
    subscribeToGroup.mockReset()
  })

  test('should return fakeResult', () => {
    expect(result).resolves.toBe(fakeResult)
  })
  test('mercadoPagoCheckout should be called with', () => {
    expect(mercadoPagoCheckout).toBeCalledWith(paymentMethod)
  })
  test('subscribeToGroup should be called with', () => {
    expect(subscribeToGroup).toBeCalledWith({ ...subscriptionData, userId: fakeUserId, paymentId: fakeMercadopagoResult })
  })
})

test('subscribe rejects', () => {
  mercadoPagoCheckout.mockReturnValueOnce(fakeMercadopagoResult)
  subscribeToGroup.mockImplementation(() => { throw new Error('creation failed') })

  expect(subscribe(null, fakeInput, fakeCurrentUser)).rejects.toEqual(Error('creation failed'))

  mercadoPagoCheckout.mockReset()
  subscribeToGroup.mockReset()
})
