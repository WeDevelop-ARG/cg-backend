module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('business', {
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
        allowNull: false,
        references: {
          model: 'legalInformation',
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
    return queryInterface.dropTable('business')
  }
}
