import * as subscriptionController from '~/src/controllers/subscription'

const resolvers = {
  Mutation: {
    subscribeToGroup: (obj, { input }) => subscriptionController
      .subscribe({ userId: input.userId, groupId: input.groupId })
  }
}

export default resolvers
