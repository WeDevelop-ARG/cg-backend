import * as awsController from '~/src/controllers/awsS3'

const resolvers = {
  Mutation: {
    signS3: awsController.signS3
  }
}

export default resolvers
