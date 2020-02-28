export default (sequelize, DataTypes) => sequelize.define('product', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: DataTypes.UUIDV4
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  marketPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, { freezeTableName: true })
