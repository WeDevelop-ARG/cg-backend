module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'personId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'personId')
  }
}
