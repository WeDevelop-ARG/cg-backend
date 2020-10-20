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
      unique: true,
      alloNull: false
    }
  })

  // Associations
  User.associate = (models) => {
    User.belongsToMany(models.group, { as: 'subscribedGroups', through: models.groupSubscription })
    User.hasMany(models.group, { as: 'publishedGroups', foreignKey: 'sellerId' })
    User.hasOne(models.person)
    User.belongsToMany(models.business, {
      through: 'userBusiness',
      foreignKey: 'userId',
      as: 'businesses'
    })
  }

  return User
}
