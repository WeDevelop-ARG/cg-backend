module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('business', 'defaultPayoutMethodId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'payoutMethod',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('business', 'defaultPayoutMethodId')
  }
}
