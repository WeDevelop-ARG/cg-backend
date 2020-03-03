export default (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'PAIRED',
        'SMALL_GROUP',
        'BIG_GROUP'
      ],
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'COMPLETE',
        'INCOMPLETE',
        'EXPIRED'
      ],
      allowNull: false
    },
  })

  // Associations
  Group.associate = (models) => {
    Group.belongsTo(models.product)
  }

  return Group
}
