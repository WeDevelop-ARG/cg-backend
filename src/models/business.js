export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    fantasyName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Business.associate = (models) => {
    Business.belongsTo(models.legalInformation)
    Business.belongsTo(models.physicalAddress, {
      foreignKey: 'physicalAddressId',
      as: 'realAddress'
    })
    Business.belongsToMany(models.user, {
      through: 'userBusiness',
      foreignKey: 'businessId',
      as: 'users'
    })
  }

  return Business
}
