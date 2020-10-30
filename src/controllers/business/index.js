import { isEmpty } from 'lodash'

export const getRealName = async (obj) => {
  const legalInformation = await obj.getLegalInformation()

  return legalInformation.businessName
}

export const getVertical = async (obj) => {
  const legalInformation = await obj.getLegalInformation()

  return legalInformation.businessVertical
}

export const getCUIT = async (obj) => {
  const legalInformation = await obj.getLegalInformation()

  return legalInformation.CUIT
}

export const getAFIPCondition = async (obj) => {
  const legalInformation = await obj.getLegalInformation()

  return legalInformation.AFIPCondition
}

export const getAddress = (obj) => obj.getRealAddress()

export const createBusiness = (obj, { input }, { models, currentUser }) => {
  return models.sequelize.transaction(async (transaction) => {
    const {
      fantasyName,
      realName: businessName,
      vertical: businessVertical,
      CUIT,
      AFIPCondition,
      address: addressInput
    } = input

    if (isEmpty(currentUser)) throw new Error('An existing user is required to create a business.')

    const business = await models.business.create({
      fantasyName,
      realAddress: addressInput,
      legalInformation: {
        businessName,
        businessVertical,
        CUIT,
        AFIPCondition,
        physicalAddress: addressInput
      }
    }, {
      transaction,
      include: [{
        association: models.business.LegalInformation,
        include: [models.legalInformation.PhysicalAddress]
      }, {
        association: models.business.RealAddress
      }]
    })

    await business.setUsers(currentUser, { transaction })

    return business
  })
}

export const getBusinessById = async (obj, { id }, { models }) => {
  const business = await models.business.findByPk(id)

  if (isEmpty(business)) throw new Error('Provided Business ID was not found in the database.')

  return business
}
