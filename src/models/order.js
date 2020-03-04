export default (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  })

  // Associations
  Order.associate = (models) => {
    Order.belongsTo(models.group)
  }

  return Order
}
