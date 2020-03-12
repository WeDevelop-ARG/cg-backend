export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      alloNull: false
    },
    email: {
      type: DataTypes.STRING,
      alloNull: false
    }
  })

  // Associations
  User.associate = (models) => {
    User.belongsToMany(models.group, { through: models.groupSubscription })
  }

  return User
}
