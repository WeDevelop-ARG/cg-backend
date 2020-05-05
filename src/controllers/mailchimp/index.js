import mailchimp from '~/src/utils/mailchimp'

export const subscribe = (obj, { input }) => mailchimp.addMember(input.email)
