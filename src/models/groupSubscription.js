export default (sequelize, DataTypes) => {
  const GroupSubscription = sequelize.define('groupSubscription', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  })

  // Associations
  GroupSubscription.associate = (models) => {
    GroupSubscription.belongsTo(models.group)
    GroupSubscription.belongsTo(models.user)
  }

  return GroupSubscription
}
