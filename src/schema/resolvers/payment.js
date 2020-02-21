import * as paymentController from '~/src/controllers/payment'

const resolvers = {
  Mutation: {
    checkout: paymentController.checkout
  }
}

export default resolvers
