const AFIP_CONDITION_VALUES = ['ENROLLED_RESPONSIBLE', 'FINAL_CONSUMER']

export default (sequelize, DataTypes) => {
  const LegalInformation = sequelize.define('legalInformation', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    businessVertical: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CUIT: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false
    },
    AFIPCondition: {
      type: DataTypes.ENUM(...AFIP_CONDITION_VALUES),
      allowNull: false
    }
  })

  LegalInformation.associate = (models) => {
    LegalInformation.hasMany(models.business)
    LegalInformation.PhysicalAddress = LegalInformation.belongsTo(models.physicalAddress)
  }

  return LegalInformation
}
