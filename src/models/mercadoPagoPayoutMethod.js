export default (sequelize, DataTypes) => {
  const MercadoPagoPayoutMethod = sequelize.define('mercadoPagoPayoutMethod', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    payoutMethodId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'payoutMethod',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  })

  MercadoPagoPayoutMethod.associate = (models) => {
    MercadoPagoPayoutMethod.belongsTo(models.payoutMethod, {
      foreignKey: 'payoutMethodId',
      constraints: false,
      scope: {
        type: 'MercadoPagoPayoutMethod'
      }
    })
  }

  return MercadoPagoPayoutMethod
}
