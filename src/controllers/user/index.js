import cognitoService from './cognito'

export const getPurchaseGroups = (obj, args) => obj.getGroups()

export const getCurrentUser = async (obj, args, context) => {
  const currentUserEmail = await cognitoService.getCurrentUser()
  return context.models.user.findOne({ where: { email: currentUserEmail } })
}

export const login = async (obj, args, context) => {
  await cognitoService.authenticate(args.input.email, args.input.password)
  return context.models.user.findOne({ where: { email: args.input.email } })
}

export const signup = async (obj, args, context) => {
  await cognitoService.addUser(args.input.email, args.input.password)
  return context.models.user.create(args.input)
}

export const logout = () => {
  const user = cognitoService.getCurrentUserPool()
  console.log(user)
  if (user) {
    user.signOut()
    return true
  }
  return false
}
