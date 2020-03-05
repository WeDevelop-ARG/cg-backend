import { group } from '~/src/models'

export const getGroups = () => group.findAll()

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
