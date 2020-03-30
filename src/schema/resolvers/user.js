import * as userController from '~/src/controllers/user'

const resolvers = {
  Query: {
    currentUser: userController.currentUser
  },
  User: {
    purchaseGroups: userController.getPurchaseGroups
  }
}

export default resolvers
