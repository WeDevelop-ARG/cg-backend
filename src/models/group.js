export default (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'PAIR',
        'GROUP',
      ],
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })

  // Associations
  Group.associate = (models) => {
    Group.belongsTo(models.product)
  }

  return Group
}
