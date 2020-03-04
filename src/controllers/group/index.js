import { group } from '~/src/models'

export const getGroups = () => group.findAll()

export const getProduct = (obj, args, context) => obj.getProduct()
