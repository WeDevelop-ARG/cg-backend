
import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_OkSTj3mq4',
  ClientId: '5dsigl69f487rhrifrsi21p0ph'
}

export default new CognitoUserPool(poolData)