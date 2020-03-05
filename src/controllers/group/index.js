import { group } from '~/src/models'

export const getGroups = () => group.findAll()

export const getProduct = (obj) => obj.getProduct()

export const createGroup = (obj, args, context) => {
  return context.models.group.create(args.input)
}
