import { AuthenticationError } from 'apollo-server-express'

export default (obj, args, context) => {
  if (!context.currentUser) throw new AuthenticationError('Must be authenticated')

  return (controller) => controller(obj, args, context)
}
