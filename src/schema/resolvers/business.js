import * as businessController from '~/src/controllers/business'

const resolvers = {
  Business: {
    realName: businessController.getRealName,
    vertical: businessController.getVertical,
    CUIT: businessController.getCUIT,
    AFIPCondition: businessController.getAFIPCondition,
    address: businessController.getAddress
  },
  Query: {
    business: businessController.getBusinessById
  },
  Mutation: {
    createBusiness: businessController.createBusiness
  }
}

export default resolvers
