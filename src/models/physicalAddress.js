export default (sequelize, DataTypes) => {
  const PhysicalAddress = sequelize.define('physicalAddress', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apartment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  })

  return PhysicalAddress
}
