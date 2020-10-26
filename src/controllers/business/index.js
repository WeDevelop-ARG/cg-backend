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

export const createBusiness = (obj, { input }, { models }) => {
  return models.sequelize.transaction(async (transaction) => {
    const {
      fantasyName,
      realName: businessName,
      vertical: businessVertical,
      CUIT,
      AFIPCondition,
      address: addressInput
    } = input

    const address = await models.physicalAddress.create(addressInput, { transaction })

    const legalInformation = await models.legalInformation.create({
      businessName,
      businessVertical,
      CUIT: Number(CUIT),
      AFIPCondition,
      physicalAddressId: address.id
    }, { transaction })

    const business = await models.business.create({
      fantasyName,
      physicalAddressId: address.id
    }, { transaction })

    await business.setLegalInformation(legalInformation, { transaction })

    return business
  })
}

export const getBusinessById = (obj, { id }, { models }) => models.business.findByPk(id)
