'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('product', 'photoUrl', Sequelize.TEXT)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('product', 'photoUrl', Sequelize.STRING)
  }
}
