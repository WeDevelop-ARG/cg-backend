import * as userController from '~/src/controllers/user'

const resolvers = {
  User: {
    subscribedGroups: userController.getSubscribedGroups,
    publishedGroups: userController.getPublishedGroups
  },
  Query: {
    currentUser: userController.getCurrentUser
  },
  Mutation: {
    signup: userController.signup,
    login: userController.login,
    logout: userController.logout
  }
}

export default resolvers
