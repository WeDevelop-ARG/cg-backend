import * as groupSubscriptionController from '~/src/controllers/groupSubscription'

const resolvers = {
  Mutation: {
    subscribeToGroup: groupSubscriptionController.subscribe
  }
}

export default resolvers
