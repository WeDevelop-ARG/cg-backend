import { group, groupSubscription } from '~/src/models'

export const getGroups = async (obj, args, { currentUser = {} }) => {
  const { id: userId } = await currentUser
  let groups = await group.findAll()

  if (userId) {
    const userSubscriptions = (await groupSubscription.findAll({ where: { userId } }))
      .map((subscription) => subscription.groupId)

    groups = groups.map((group) => {
      if (userSubscriptions.includes(group.id)) return { ...group.toJSON(), isSubscribed: true }

      return group
    })
  }

  return groups
}

export const getGroupById = async (obj, { id }, { models }) => models.group.findByPk(id)

export const getProduct = (obj) => obj.getProduct()

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
