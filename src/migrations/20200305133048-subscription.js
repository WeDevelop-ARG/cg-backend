'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subscription', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      groupId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'group',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('subscription')
  }
}
