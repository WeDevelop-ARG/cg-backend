import mercadopago from 'mercadopago'
import faker from 'faker'

mercadopago.configurations.setAccessToken(`
TEST-1975651894202504-021815-0e6f3e6fafe6eb28bd68353c5fce8824-528302578
`)

export const checkout = async (paymentInput) => {
  const paymentData = await mercadopago.payment.create(paymentInput)

  return {
    id: faker.random.uuid(),
    productId: faker.random.uuid(),
    paymentId: paymentData.id,
    status: paymentData.status,
    statusDetail: paymentData.status_detail,
    dateApproved: paymentData.date_approved,
    paymentMethodId: paymentData.payment_method_id,
    paymentTypeId: paymentData.payment_type_id,
    payerEmail: paymentData.payer.email
  }
}
