import * as mailchimpController from '~/src/controllers/mailchimp'

const resolvers = {
  Query: {
    mailchimpMembers: mailchimpController.getAudience
  }
}

export default resolvers
