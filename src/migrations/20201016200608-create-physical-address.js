module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('physicalAddress', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      streetNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apartment: {
        type: Sequelize.STRING,
        allowNull: true
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('physicalAddress')
  }
}
