import { groupSubscription } from '~/src/models'

export const subscribe = (obj, { input }) => groupSubscription.create({
  userId: input.userId, groupId: input.groupId
})
