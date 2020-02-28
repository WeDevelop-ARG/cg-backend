'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tableFields = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }

    return queryInterface.createTable('order', tableFields)
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('order')
  }
}
