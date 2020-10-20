module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable('business', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        fantasyName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        legalInformationId: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'legalInformation',
            key: 'id'
          }
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
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true
        }
      }, { transaction })

      await queryInterface.addIndex('business', [queryInterface.sequelize.fn('lower', queryInterface.sequelize.col('fantasyName'))], {
        name: 'business_fantasyName_unique_case_insensitive',
        unique: true,
        transaction
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('business', { transaction })
      await queryInterface.removeIndex('business', 'business_fantasyName_unique_case_insensitive', { transaction })
    })
  }
}
