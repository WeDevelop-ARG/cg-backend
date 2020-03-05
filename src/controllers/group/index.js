import { group } from '~/src/models'
import { Op } from 'sequelize'

export const getGroups = () => group.findAll()

export const getProduct = (obj) => obj.getProduct()

export const processDifferences = async (obj, args, context) => {
  await context.models.sequelize.transaction(async (transaction) => {
    const options = { transaction }

    await processDeleted(context.models.group, args.input.deleted, options)
    await processUpdated(context.models.group, args.input.updated, options)
    await processNew(context.models.group, args.input.new, options)
  })

  return true
}

export const processDeleted = (Group, groupIds, options) => {
  if (!groupIds || groupIds.length === 0) return null

  return Group.destroy({ where: { id: { [Op.in]: groupIds } } }, options)
}

export const processUpdated = (Group, groups, options) => {
  if (!groups || groups.length === 0) return null

  return Promise.all(
    groups.map((group) => Group.update(group, { where: { id: group.id } }, options))
  )
}

export const processNew = (Group, groups, options) => {
  if (groups && groups.length > 0) {
    return Group.bulkCreate(groups, options)
  }
}
