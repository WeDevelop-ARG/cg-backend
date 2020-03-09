export default (sequelize, DataTypes) => {
  const GroupSubscription = sequelize.define('groupSubscription', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  })

  GroupSubscription.beforeCreate(async ({ groupId }) => {
    const groupInstance = await sequelize.models.group.findByPk(groupId)

    if (!groupInstance) throw new Error('No se encontró el grupo solicitado')

    const participantCount = await GroupSubscription.count({ where: { groupId } })

    if (participantCount >= groupInstance.maxParticipants) {
      throw new Error('No podés comprar si el grupo está lleno')
    }
  })

  // Associations
  GroupSubscription.associate = (models) => {
    GroupSubscription.belongsTo(models.group)
    GroupSubscription.belongsTo(models.user)
  }

  return GroupSubscription
}
