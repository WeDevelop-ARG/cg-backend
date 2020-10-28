import { isEmpty, upperFirst } from 'lodash'

export default (sequelize, DataTypes) => {
  const PayoutMethod = sequelize.define('payoutMethod', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    businessId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'business',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  PayoutMethod.prototype.getMethod = function (options) {
    if (isEmpty(this.type)) return Promise.resolve(null)

    const mixinMethodName = `get${upperFirst(this.type)}`

    return this[mixinMethodName](options)
  }

  PayoutMethod.associate = (models) => {
    PayoutMethod.belongsTo(models.business)
    PayoutMethod.MercadoPagoPayoutMethod = PayoutMethod.hasOne(models.mercadoPagoPayoutMethod, {
      foreignKey: 'payoutMethodId'
    })
  }

  return PayoutMethod
}
