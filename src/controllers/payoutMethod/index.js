import { isEmpty } from 'lodash'

export const getBusiness = (obj) => obj.getBusiness()

export const createMercadoPagoPayoutMethod = async (obj, { input }, { models }) => {
  return models.sequelize.transaction(async (transaction) => {
    const {
      businessId,
      ...mercadoPagoInput
    } = input

    const business = await models.business.findByPk(businessId, { transaction })

    if (isEmpty(business)) throw new Error('Provided Business ID was not found in the database.')

    const payoutMethod = await models.payoutMethod.create({
      businessId,
      type: 'mercadoPagoPayoutMethod',
      mercadoPagoPayoutMethod: mercadoPagoInput
    }, {
      transaction,
      include: [{
        association: models.payoutMethod.MercadoPagoPayoutMethod
      }]
    })

    return payoutMethod
  })
}
