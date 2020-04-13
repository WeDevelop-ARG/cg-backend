import * as groupController from '~/src/controllers/group'
import requireAuth from '~/src/middlewares/requireAuth'

const resolvers = {
  Group: {
    product: groupController.getProduct,
    participantsCount: groupController.getParticipantsCount,
    isSubscribed: groupController.isCurrentUserSubscribed
  },
  Query: {
    groups: groupController.getGroups,
    group: groupController.getGroupById
  },
  Mutation: {
    createGroup: requireAuth(groupController.createGroup)
  }
}

export default resolvers
