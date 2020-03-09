import { groupSubscription, group } from '~/src/models'

export default async ({ userId, groupId }) => {
  const groupInstance = await group.findByPk(groupId)

  if (!groupInstance) throw new Error('No se encontró el grupo solicitado')

  const participantCount = await groupSubscription.count({ where: { groupId } })

  if (participantCount >= groupInstance.maxParticipants) {
    throw new Error('No podés comprar si el grupo está lleno')
  }

  return groupSubscription.create({ userId, groupId })
}
