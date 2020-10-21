module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('legalInformation', 'CUIT', {
      type: Sequelize.BIGINT,
      unique: true,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint(
        'legalInformation',
        'legalInformation_CUIT_key',
        { transaction }
      )
      await queryInterface.changeColumn('legalInformation', 'CUIT', {
        type: Sequelize.INTEGER,
        allowNull: false
      }, { transaction })
    })
  }
}
