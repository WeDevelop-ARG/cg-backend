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

export const createGroup = async (obj, { input }, context) => {
  // Add a transaction
  return context.sequelize.transaction(async (transaction) => {
    const productId = await createProductIfNotGiven(input, context.models, { transaction })

    return context.models.group.create({
      ...input,
      productId,
      sellerId: context.currentUser.id
    })
  })
}

const createProductIfNotGiven = async (input, models, { transaction }) => {
  if (input.productId) return input.productId

  const product = await models.product.create(input.product, { transaction })

  await savePhotos(product.id, input.product.productPhotosUrls, { transaction })

  return product.id
}

const savePhotos = (productId, photos, { transaction }) => productPhoto
  .bulkCreate(photos.map((url) => ({ productId, url })), { transaction })
