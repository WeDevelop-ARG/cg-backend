import mercadopago from 'mercadopago'
import faker from 'faker'

mercadopago.configurations.setAccessToken('TEST-1975651894202504-021815-0e6f3e6fafe6eb28bd68353c5fce8824-528302578')

export const checkout = async (obj, args, context) => {
  const mercadopagoFormat = {
    transaction_amount: 12.5,
    token: args.input.paymentMethod.token,
    payment_method_id: args.input.paymentMethod.paymentMethod,
    payer: {
      email: args.input.paymentMethod.accountEmail
    },
    installments: 1
  }
  const paymentData = await mercadopago.payment.create(mercadopagoFormat)

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
