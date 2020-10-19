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
    Business.hasOne(models.user)
    Business.belongsToMany(models.physicalAddress, {
      through: 'businessPhysicalAddress',
      foreignKey: 'businessId',
      as: 'physicalAddresses'
    })
  }

  return Business
}
