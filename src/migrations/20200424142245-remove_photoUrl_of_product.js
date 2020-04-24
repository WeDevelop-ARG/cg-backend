'use strict'

module.exports = {
  up: (queryInterface) => {
    return queryInterface.removeColumn('product', 'photoUrl')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('product', 'photoUrl', Sequelize.TEXT)
  }
}
