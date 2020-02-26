import { checkout as checkoutWithMercadoPago } from './mercado-pago'

export const checkout = (obj, input) => {
  return checkoutWithMercadoPago(input)
}
