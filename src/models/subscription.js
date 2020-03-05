export default (sequelize, DataTypes) => {
  const Subscription = sequelize.define('subscription', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'group',
        key: 'id'
      }
    }
  })

  // Associations
  Subscription.associate = (models) => {
    Subscription.belongsTo(models.group)
    Subscription.belongsTo(models.user)
  }

  return Subscription
}
