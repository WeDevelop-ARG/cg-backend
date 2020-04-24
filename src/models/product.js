export default (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    marketPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  })

  // Associations
  Product.associate = (models) => {
    Product.hasMany(models.productPhoto)
  }

  return Product
}
