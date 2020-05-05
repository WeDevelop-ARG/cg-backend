export default {
  response: ({ email_address = '', id = '' }) => ({
    id,
    email: email_address
  })
}
