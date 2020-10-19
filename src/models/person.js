export default (sequelize, DataTypes) => {
  const Person = sequelize.define('person', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Person.associate = (models) => {
    Person.belongsToMany(models.physicalAddress, {
      as: 'physicalAddresses',
      foreignKey: 'personId',
      through: 'personPhysicalAddress'
    })
    Person.hasOne(models.user)
  }

  return Person
}
