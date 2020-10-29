import { isEmpty } from 'lodash'

export const getAddress = (obj) => obj.getPhysicalAddress()

export const getPersonalInformation = async (obj, { userId }, { models }) => {
  const person = await models.person.findOne({ where: { userId } })

  if (isEmpty(person)) throw new Error('Provided UserId could not be found in the database.')

  return person
}

export const setPersonalInformation = (obj, { userId, personalInformation }, { models }) => {
  return models.sequelize.transaction(async (transaction) => {
    const {
      firstName,
      lastName,
      dni,
      address: addressInput
    } = personalInformation

    const user = await models.user.findByPk(userId, { transaction })

    if (isEmpty(user)) throw new Error('Provided UserId could not be found in the database.')

    const person = await models.person.findOne({ where: { userId }, transaction })

    if (isEmpty(person)) {
      return models.person.create({
        userId,
        firstName,
        lastName,
        dni,
        physicalAddress: addressInput
      }, {
        transaction,
        include: [{
          association: models.person.PhysicalAddress
        }]
      })
    }

    await person.update({
      firstName,
      lastName,
      dni
    }, { transaction })

    const address = await person.getPhysicalAddress({ transaction })

    await address.update(addressInput, { transaction })

    return person
  })
}
