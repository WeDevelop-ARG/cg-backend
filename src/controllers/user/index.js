import cognitoService from './cognito'
import loginUseCase from './login'
import signupUseCase from './signup'

export const getSubscribedGroups = (obj, args) => obj.getSubscribedGroups()

export const getPublishedGroups = (obj, args) => obj.getPublishedGroups()

export const getCurrentUser = async (obj, args, context) => context.currentUser

export const login = async (obj, { input }, context) => loginUseCase(
  input, { userModel: context.models.user, cognitoService }
)

export const signup = async (obj, { input }, context) => signupUseCase(
  input, { cognitoService, userModel: context.models.user }
)

export const logout = () => {
  const user = cognitoService.getCurrentUserPool()
  if (user) {
    user.signOut()
    return true
  }
  return false
}
