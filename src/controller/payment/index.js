import mercadopago from 'mercadopago'
import faker from 'faker'

mercadopago.configurations.setAccessToken(`
TEST-1975651894202504-021815-0e6f3e6fafe6eb28bd68353c5fce8824-528302578
`)

export const reservePayment = async (paymentInput) => {
  const paymentData = await mercadopago.payment.create(paymentInput)
  const payment = {}

  payment.id = faker.random.uuid()
  payment.productId = faker.random.uuid()
  payment.paymentId = paymentData.id
  payment.status = paymentData.status
  payment.statusDetail = paymentData.status_detail
  payment.dateApproved = paymentData.dateApproved
  payment.paymentMethodId = paymentData.paymentMethodId
  payment.paymentTypeId = paymentData.paymentTypeId
  payment.payerEmail = paymentData.payer.email

  return payment
}
