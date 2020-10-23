module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('business', 'vertical', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('business', 'vertical')
  }
}
