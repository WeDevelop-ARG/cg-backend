import * as awsController from '~/src/controllers/awsS3'

const resolvers = {
  Mutation: {
    createSignedFileUploadURL: awsController.createSignedFileUploadURL
  }
}

export default resolvers
