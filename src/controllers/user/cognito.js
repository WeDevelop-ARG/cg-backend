import UserPool from './user-pool'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
global.fetch = require('node-fetch')

const authenticate = async (email, password) =>
  new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: email, Pool: UserPool })
    const authDetails = new AuthenticationDetails({ Usernmae: email, Password: password })

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        resolve(data)
      },

      onFailure: err => {
        reject(err)
      }
    })
  })

const addUser = async (email, password) =>
  new Promise((resolve, reject) => {
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) return reject(err)
      return resolve(data)
    })
  })

const getCurrentUserPool = () => UserPool.getCurrentUser()

const getCurrentUserSession = (user) => {
  if (!user) return null

  return new Promise((resolve, reject) => {
    user.getSession((err, session) => {
      if (err) return reject(err)

      return resolve(session)
    })
  })
}

const getEmailFromSession = (session) => {
  if (session) return null

  const { idToken: { payload: { email } = {} } = {} } = session

  return email
}

const getCurrentUser = async () => {
  const user = await getCurrentUserPool()

  const session = await getCurrentUserSession(user) || {}

  return getEmailFromSession(session)
}

module.exports = {
  authenticate,
  addUser,
  getCurrentUserPool,
  getCurrentUser
}
