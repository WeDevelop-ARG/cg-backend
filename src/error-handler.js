import PaymentError from '~/src/errors/payment-error'

export default (err, req, res, next) => {
  if (err instanceof PaymentError) {
    res.status(415).send('The request or response is invalid')
  }
}
