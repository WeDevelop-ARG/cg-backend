import * as checkoutController from '~/src/controllers/checkout'

const resolvers = {
  Mutation: {
    checkout: checkoutController.checkout
  }
}

export default resolvers
