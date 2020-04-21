import { group, productPhoto } from '~/src/models'

export const getGroups = () => group.findAll()

export const getGroupById = async (obj, { id }, { models }) => models.group.findByPk(id)

export const getProduct = (obj) => obj.getProduct()

export const isCurrentUserSubscribed = async (obj, args, context) => {
  if (!context.currentUser) return false

  const groupSubscription = await context.models.groupSubscription.count({
    where: {
      groupId: obj.id,
      userId: context.currentUser.id
    }
  })

  return !!groupSubscription
}

export const getParticipantsCount = (obj, args, context) => {
  return context.models.groupSubscription.count({
    where: {
      groupId: obj.id
    }
  })
}

export const createGroup = async (obj, { input }, context) => context.sequelize
  .transaction(async (transaction) => {
    const productId = await createProductIfNotGiven(input, context.models, { transaction })

    return context.models.group.create({
      ...input,
      productId,
      sellerId: context.currentUser.id
    }, { transaction })
  })

const createProductIfNotGiven = async (input, models, { transaction }) => {
  if (input.productId) return input.productId

  const product = await models.product.create(input.product, { transaction })

  await savePhotos(product.id, input.product.productPhotosUrls, { transaction })

  return product.id
}

const savePhotos = (productId, photos, { transaction }) => productPhoto
  .bulkCreate(photos.map((url) => ({ productId, url })), { transaction })

export const deleteGroup = async (obj, { id }, context) => {
  const group = await context.models.group.findByPk(id)

  if (!group || await isNotDeleteable(group, context)) return 0

  const productId = group.productId
  await context.sequelize.transaction(async (t) => {
    await group.destroy({}, { transaction: t })
    await context.models.product.destroy({ where: { id: productId } }, { transaction: t })

    return 1
  })
}

const isNotDeleteable = async (group, context) => {
  const isSellerCorrect = context.currentUser === group.sellerId
  const isGroupExpired = group.expiresAt <= new Date()
  const subsribersCount = await context.models.groupSubscription.count({ where: { groupId: group.id } })
  const hasActualSuscribers = !isGroupExpired && (subsribersCount > 0)

  return !isSellerCorrect || hasActualSuscribers
}
