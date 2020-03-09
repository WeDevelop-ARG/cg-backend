export default (sequelize, DataTypes) => {
  const GroupSubscription = sequelize.define('groupSubscription', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  })

  GroupSubscription.beforeCreate(async (input) => {
    await checkGroupIsNotFull(input)
  })

  // Associations
  GroupSubscription.associate = (models) => {
    GroupSubscription.belongsTo(models.group)
    GroupSubscription.belongsTo(models.user)
  }

  async function checkGroupIsNotFull ({ groupId }) {
    const groupInstance = await sequelize.models.group.findByPk(groupId)

    const participantCount = await GroupSubscription.count({ where: { groupId } })

    if (groupInstance && participantCount >= groupInstance.maxParticipants) {
      throw new Error('No podés comprar si el grupo está lleno')
    }
  }

  return GroupSubscription
}
