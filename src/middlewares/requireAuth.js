import { AuthenticationError } from 'apollo-server-express'

export default (controller) => (obj, args, context) => {
  if (!context.currentUser) throw new AuthenticationError('Must be authenticated')

  return controller(obj, args, context)
}
