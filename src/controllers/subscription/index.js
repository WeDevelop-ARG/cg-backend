import { subscription } from '~/src/models'

export const subscribe = ({ userId, groupId }) => subscription.create({ userId, groupId })
