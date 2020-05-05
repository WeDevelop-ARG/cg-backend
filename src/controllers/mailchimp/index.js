import mailchimp from '~/src/utils/mailchimp'

export const getAudience = () => mailchimp.getAllMembers()
