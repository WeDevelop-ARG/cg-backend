import connection, { ENDPOINT } from './httpConnection'
import format from './format'

export default {
  addMember: async (email) => {
    const { data: newMember } = await connection
      .post(ENDPOINT.AUDIENCE, { email_address: email, status: 'subscribed' })

    return format.response(newMember)
  },
  getAllMembers: async () => {
    const { data: { members } } = await connection.get(ENDPOINT.AUDIENCE)

    return members.map((member) => format.response(member))
  }
}
