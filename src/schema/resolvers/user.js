import * as userController from '~/src/controllers/user'

const resolvers = {
  Query: {
    currentUser: userController.currentUser
  }
}

export default resolvers
