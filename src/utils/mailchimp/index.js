import connection, { ENDPOINT } from './httpConnection'
import format from './format'

export default {
  addMember: async (member) => {
    const { data: newMember } = await connection.post(ENDPOINT.AUDIENCE, member)

    return format.response(newMember)
  },
  getAllMembers: async () => {
    const { data: members = [] } = await connection.get(ENDPOINT.AUDIENCE)

    return members.map((member) => format.response(member))
  }
}
