import * as groupSubscriptionController from '~/src/controllers/groupSubscription'
import requireAuth from '~/src/middlewares/requireAuth'

const resolvers = {
  Mutation: {
    subscribeToGroup: requireAuth(groupSubscriptionController.subscribe)
  }
}

export default resolvers
