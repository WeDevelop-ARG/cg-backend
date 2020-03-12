'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'email')
  }
}