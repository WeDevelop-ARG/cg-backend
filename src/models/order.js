export default (sequelize, DataTypes) => sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  price: {
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
