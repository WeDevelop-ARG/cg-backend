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

  MercadoPagoPayoutMethod.prototype.payout = function (options) {
    console.log('Mercado pago payout placeholder')
  }

  MercadoPagoPayoutMethod.associate = (models) => {
    MercadoPagoPayoutMethod.belongsTo(models.payoutMethod)
  }

  return MercadoPagoPayoutMethod
}
