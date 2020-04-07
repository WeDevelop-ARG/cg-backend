'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('group', 'sellerId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('group', 'sellerId')
  }
}
