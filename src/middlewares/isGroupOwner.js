import { AuthenticationError } from 'apollo-server-express'

export default (controller) => async (obj, args, context) => {
  if (!context.currentUser) throw new AuthenticationError('Must be authenticated')

  const group = await context.models.group.findByPk(args.id)
  if (!group || group.sellerId !== context.currentUser.id) throw new AuthenticationError('Must be group seller')

  return controller(obj, args, context)
}
