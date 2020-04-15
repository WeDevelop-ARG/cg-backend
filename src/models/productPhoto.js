export default (sequelize, DataTypes) => {
  const ProductPhoto = sequelize.define('productPhoto', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })

  // Associations
  ProductPhoto.associate = (models) => {
    ProductPhoto.belongsTo(models.product)
  }

  return ProductPhoto
}
