import * as groupController from '~/src/controllers/group'
import requireAuth from '~/src/middlewares/requireAuth'
import isGroupOwner from '~/src/middlewares/isGroupOwner'

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
    createGroup: requireAuth(groupController.createGroup),
    deleteGroup: isGroupOwner(groupController.deleteGroup)
  }
}

export default resolvers
