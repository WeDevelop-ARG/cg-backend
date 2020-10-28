import * as payoutMethodController from '~/src/controllers/payoutMethod'

const resolvers = {
  PayoutMethod: {
    business: payoutMethodController.getBusiness
  },
  Mutation: {
    createMercadoPagoPayoutMethod: payoutMethodController.createMercadoPagoPayoutMethod
  }
}

export default resolvers
