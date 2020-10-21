module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('legalInformation', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      businessVertical: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CUIT: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      AFIPCondition: {
        type: Sequelize.ENUM(),
        values: ['ENROLLED_RESPONSIBLE', 'FINAL_CONSUMER'],
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
    return queryInterface.dropTable('legalInformation')
  }
}
