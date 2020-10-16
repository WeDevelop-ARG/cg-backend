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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AFIPCondition: {
      type: DataTypes.ENUM(...AFIP_CONDITION_VALUES),
      allowNull: false
    },
    physicalAddressId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'physicalAddress',
        key: 'id'
      }
    }
  })

  return LegalInformation
}