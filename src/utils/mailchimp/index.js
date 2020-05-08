import connection, { ENDPOINT } from './httpConnection'
import format from './format'
import faker from 'faker'

export default {
  addMember: async (email) => {
    try {
      return format.response((await connection
        .post(ENDPOINT.AUDIENCE, { email_address: email, status: 'subscribed' })).data)
    } catch (error) {
      return { email, id: faker.random.uuid() }
    }
  },
  getAllMembers: async () => {
    const { data: { members } } = await connection.get(ENDPOINT.AUDIENCE)

    return members.map((member) => format.response(member))
  }
}
