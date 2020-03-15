import * as userController from '~/src/controllers/user'

const resolvers = {
  User: {
    purchaseGroups: userController.getPurchaseGroups
  },
  Query: {
    currentUser: userController.currentUser
  },
  Mutation: {
    signup: userController.signup,
    login: userController.login,
    logout: userController.logout
  }
}

export default resolvers
