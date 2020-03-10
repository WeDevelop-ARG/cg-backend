import { group } from '~/src/models'

export const getGroups = () => group.findAll()

export const getGroupById = async (obj, { id }, { models }) => models.group.findByPk(id)

export const getProduct = (obj) => obj.getProduct()

export const isCurrentUserSubscribed = async (obj, args, context) => {
  if (!context.currentUser) return false

  const groupSubscription = await context.models.groupSubscription.count({
    where: {
      groupId: obj.id,
      userId: context.currentUser.id
    }
  })

  return !!groupSubscription
}

export const getParticipantsCount = (obj, args, context) => {
  return context.models.groupSubscription.count({
    where: {
      groupId: obj.id
    }
  })
}

export const createGroup = (obj, args, context) => {
  return context.models.group.create(args.input)
}
