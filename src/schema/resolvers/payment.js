import * as paymentController from '~/src/controllers/payment'

const resolvers = {
  Mutation: {
    reservePayment: paymentController.reservePayment
  }
}

export default resolvers
