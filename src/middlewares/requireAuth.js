import { AuthenticationError } from 'apollo-server-express'
import { isFunction } from 'lodash'
import { combineResolvers } from 'graphql-resolvers'

const isAuthenticated = (resolverOrObj, args, context) => {
  if (isFunction(resolverOrObj)) {
    return combineResolvers(isAuthenticated, resolverOrObj)
  }

  const authenticated = context.currentUser

  if (!authenticated) throw new AuthenticationError('Must be authenticated')
}

export default isAuthenticated
