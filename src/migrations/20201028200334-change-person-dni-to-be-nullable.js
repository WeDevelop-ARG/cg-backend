module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('person', 'dni', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('person', 'dni', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
}
