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

const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const user = getCurrentUserPool()
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          reject(err)
        } else {
          resolve(session.idToken.payload.email)
        }
      })
    } else {
      reject()
    }
  })

module.exports = {
  authenticate,
  addUser,
  getCurrentUserPool,
  getCurrentUser
}
