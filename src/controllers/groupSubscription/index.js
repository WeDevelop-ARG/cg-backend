import mercadoPagoCheckout from './checkout'
import subscribeToGroup from './subscribe'

export const subscribe = async (obj, { input }) => {
  const { paymentMethod, ...subscriptionData } = input

  const paymentId = mercadoPagoCheckout(paymentMethod)

  const subscription = await subscribeToGroup({ ...subscriptionData, paymentId })

  return subscription
}
