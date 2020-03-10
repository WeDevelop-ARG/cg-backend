import * as groupController from '~/src/controllers/group'

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
    createGroup: groupController.createGroup
  }
}

export default resolvers
