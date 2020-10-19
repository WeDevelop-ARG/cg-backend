module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'businessId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'business',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'businessId')
  }
}
