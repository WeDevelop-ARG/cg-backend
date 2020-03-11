import * as userController from '~/src/controllers/user'

const resolvers = {
  User: {
    groupsSubscribed: userController.groupsSubscribed
  },
  Query: {
    currentUser: userController.currentUser
  }
}

export default resolvers
