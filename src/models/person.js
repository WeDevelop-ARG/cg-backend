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
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  })

  Person.associate = (models) => {
    Person.belongsTo(models.physicalAddress)
    Person.belongsTo(models.user)
  }

  return Person
}
