import PaymentError from '~/src/errors/payment-error'
import mercadopago from 'mercadopago'
import faker from 'faker'

mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN)

const generateArgumentsForPaymentCreate = (args) => ({
  transaction_amount: Number.parseFloat(faker.finance.amount(1, 1000, 2)),
  token: args.input.paymentMethod.token,
  payment_method_id: args.input.paymentMethod.paymentMethod,
  payer: {
    email: args.input.paymentMethod.accountEmail
  },
  installments: 1
})

const adaptResponse = (response) => {
  const { body: paymentData } = response

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

export const checkoutWithMercadoPago = async (input) => {
  const reqPayload = generateArgumentsForPaymentCreate(input)
  const rawResponse = await mercadopago.payment.create(reqPayload)

  return adaptResponse(rawResponse)
}

export const checkout = async (input) => {
  const reqPayload = generateArgumentsForPaymentCreate(input)
  let rawResponse

  try {
    rawResponse = await mercadopago.payment.create(reqPayload)
  } catch (err) {
    throw new PaymentError(err.message)
  }

  return adaptResponse(rawResponse)
}
