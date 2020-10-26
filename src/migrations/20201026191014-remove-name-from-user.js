module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'name')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'NO_NAME'
    })
  }
}
