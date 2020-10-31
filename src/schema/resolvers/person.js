import * as personController from '~/src/controllers/person'

const resolvers = {
  Person: {
    address: personController.getAddress
  },
  Query: {
    getPersonalInformation: personController.getPersonalInformation
  },
  Mutation: {
    setPersonalInformation: personController.setPersonalInformation
  }
}

export default resolvers
