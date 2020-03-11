
export const currentUser = (obj, args, { currentUser }) => currentUser

export const groupsSubscribed = async (obj, args, { models }) => {
  const subscriptions = await models.groupSubscription.findAll({
    where: { userId: obj.id },
    include: [{ model: models.group }]
  })

  return subscriptions.map((subscription) => subscription.group)
}
