import cognitoService from './cognito'
export const getSubscribedGroups = (obj, args) => obj.getSubscribedGroups()

export const getPublishedGroups = (obj, args) => obj.getPublishedGroups()

export const getCurrentUser = async (obj, args, context) => context.currentUser

export const login = async (obj, args, context) => {
  const auth = await cognitoService.authenticate(args.input.email, args.input.password)

  const user = await context.models.user.findOne({ where: { email: args.input.email }, raw: true })

  return { ...user, token: auth.idToken.jwtToken }
}

export const signup = async (obj, args, context) => {
  await cognitoService.addUser(args.input.email, args.input.password)
  const auth = await cognitoService.authenticate(args.input.email, args.input.password)

  let user = await context.models.user.create(args.input)
  user = user.toJSON()

  return { ...user, token: auth.idToken.jwtToken }
}

export const logout = () => {
  const user = cognitoService.getCurrentUserPool()
  if (user) {
    user.signOut()
    return true
  }
  return false
}
