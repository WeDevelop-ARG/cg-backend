import { isEmpty } from "lodash"

export const getBusiness = (obj) => obj.getBusiness()

export const createPayoutMethod = async (obj, { input }, { models }) => {
  const business = await models.business.findByPk(input.businessId)

  if (isEmpty(business)) throw new Error('Provided Business ID was not found in the database.')

  return await models.payoutMethod.create(input)
}
