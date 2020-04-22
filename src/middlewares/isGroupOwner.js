import { AuthenticationError } from 'apollo-server-express'

const isGroupOwner = async (obj, args, context) => {
  const group = await context.models.group.findByPk(args.id)
  const isSeller = group && group.sellerId === context.currentUser.id

  if (!isSeller) {
    throw new AuthenticationError('Must be group seller')
  }
}

export default isGroupOwner
