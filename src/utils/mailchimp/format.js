export default {
  response: ({ email_address = '', id = '', status = '' }) => ({
    id,
    email: email_address,
    status: status.toUpperCase()
  })
}
