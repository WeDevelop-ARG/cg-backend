module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('person', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      physicalAddressId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'physicalAddress',
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('person')
  }
}
