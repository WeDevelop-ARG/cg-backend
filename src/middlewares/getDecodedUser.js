import { user as User } from '~/src/models'

export const getUser = (decodedJwt) => {
  if (!decodedJwt || !decodedJwt.payload || !decodedJwt.payload.email) return null

  return User.findOne({ where: { email: decodedJwt.payload.email } })
}

export default getUser
