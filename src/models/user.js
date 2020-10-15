const AFIP_CONDITION_VALUES = ['ENROLLED_RESPONSIBLE', 'FINAL_CONSUMER']

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessVertical: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CUIT: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    AFIPCondition: {
      type: DataTypes.ENUM(...AFIP_CONDITION_VALUES),
      allowNull: true
    }
  })

  // Associations
  User.associate = (models) => {
    User.belongsToMany(models.group, { as: 'subscribedGroups', through: models.groupSubscription })
    User.hasMany(models.group, { as: 'publishedGroups', foreignKey: 'sellerId' })
  }

  return User
}
