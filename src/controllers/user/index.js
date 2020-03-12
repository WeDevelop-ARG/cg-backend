import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './user-pool'
global.fetch = require('node-fetch')

const authenticate = (Username, Password) =>
  new Promise((resolve, reject) => {
    console.log({ Username, Pool: UserPool })
    const user = new CognitoUser({ Username, Pool: UserPool })
    const authDetails = new AuthenticationDetails({ Username, Password })

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log('onSuccess:', data)
        resolve(data)
      },

      onFailure: err => {
        console.error('onFailure:', err)
        reject(err)
      }
    })
  })

const addUser = (email, password) => new Promise((resolve, reject) => {
  UserPool.signUp(email, password, [], null, (err, data) => {
    if (err) return reject(err)
    return resolve(data)
  })
})

const getSession = () =>
  new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser()
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          reject(err)
        } else {
          resolve(session)
        }
      })
    } else {
      reject()
    }
  })

export const getCurrentUser = async (obj, args, context) => {
  try {
    const data = await getSession()
    console.log(data)
    return context.models.user.findOne({ where: { email: data.idToken.payload.email } })
  } catch (err) {
    console.log(err)
    return err
  }
}

export const signIn = async (obj, args, context) => {
  try {
    const data = await authenticate(args.input.email, args.input.password)
    console.log('Logged in!', data)
    return context.models.user.findOne({ where: { email: args.input.email } })
  } catch (err) {
    console.error('Failed to login!', err)
    return err
  }
}

export const signUp = async (obj, args, context) => {
  try {
    const data = await addUser(args.input.email, args.input.password)
    console.log(data)
    return context.models.user.create(args.input)
  } catch (err) {
    console.log(err)
    return err
  }
}

export const signOut = () => {
  const user = UserPool.getCurrentUser()
  if (user) {
    user.signOut()
    return true
  }
  return false
}
