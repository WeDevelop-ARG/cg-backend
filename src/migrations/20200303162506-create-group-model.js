'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('group', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM,
        values: [
          'PAIR',
          'GROUP'
        ],
        allowNull: false
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('group')
  }
}
