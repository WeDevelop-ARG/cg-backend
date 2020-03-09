import { groupSubscription } from '~/src/models'

export default ({ groupId, userId }) => groupSubscription.create({ userId, groupId })
