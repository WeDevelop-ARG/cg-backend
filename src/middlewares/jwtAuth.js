import jwt from 'jsonwebtoken'
import { user as User } from '~/src/models'

const getUser = (decodedJwt) => {
  if (!decodedJwt || (decodedJwt && !decodedJwt.payload.email)) return null

  return User.findOne({ where: { email: decodedJwt.payload.email } })
}

export default async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').split(/\s+/)[1]

    if (!token) {
      return next()
    }

    const decodedJwt = jwt.decode(token, { complete: true })

    if (!decodedJwt) throw new Error('Invalid token')

    req.user = await getUser(decodedJwt)

    return next()
  } catch (error) {
    return res.status(401).send({ error: 'ACCESS DENIED' })
  }
}
