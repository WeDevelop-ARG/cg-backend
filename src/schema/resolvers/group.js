import * as groupController from '~/src/controllers/group'

const resolvers = {
  Group: {
    product: groupController.getProduct
  },
  Query: {
    groups: groupController.getGroups
  },
  Mutation: {
    processGroupDifferences: groupController.createGroup
  }
}

export default resolvers
