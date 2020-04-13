import mercadoPagoCheckout from './checkout'
import subscribeToGroup from './subscribe'

export const subscribe = async (obj, { input }, { currentUser }) => {
  const { paymentMethod, ...subscriptionData } = input

  const paymentId = mercadoPagoCheckout(paymentMethod)

  const subscription = await subscribeToGroup({ ...subscriptionData, userId: currentUser.id, paymentId })

  return subscription
}
