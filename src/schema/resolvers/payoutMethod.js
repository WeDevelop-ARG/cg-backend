import * as payoutMethodController from '~/src/controllers/payoutMethod'

const resolvers = {
  PayoutMethod: {
    business: payoutMethodController.getBusiness
  },
  Mutation: {
    createPayoutMethod: payoutMethodController.createPayoutMethod
  }
}

export default resolvers
