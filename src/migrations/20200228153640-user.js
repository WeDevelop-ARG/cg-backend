'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tableFields = {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: Sequelize.UUIDV4
      },
      photoUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
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

    return queryInterface.createTable('user', tableFields)
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('user')
  }
}
