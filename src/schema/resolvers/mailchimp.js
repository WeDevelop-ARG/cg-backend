import * as mailchimpController from '~/src/controllers/mailchimp'

const resolvers = {
  Mutation: {
    subscribeToNewsletters: mailchimpController.subscribe
  }
}

export default resolvers
