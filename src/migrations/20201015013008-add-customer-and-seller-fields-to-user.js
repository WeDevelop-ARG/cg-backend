module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn('user', 'street', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'streetNumber', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'city', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'state', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'flat', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'businessVertical', { type: Sequelize.STRING }, { transaction })
      await queryInterface.addColumn('user', 'CUIT', { type: Sequelize.INTEGER }, { transaction })
      await queryInterface.addColumn('user', 'AFIPCondition', {
        type: Sequelize.ENUM({
          values: ['ENROLLED_RESPONSIBLE', 'FINAL_CONSUMER']
        })
      }, { transaction })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('user', 'street', { transaction })
      await queryInterface.removeColumn('user', 'streetNumber', { transaction })
      await queryInterface.removeColumn('user', 'city', { transaction })
      await queryInterface.removeColumn('user', 'state', { transaction })
      await queryInterface.removeColumn('user', 'flat', { transaction })
      await queryInterface.removeColumn('user', 'businessVertical', { transaction })
      await queryInterface.removeColumn('user', 'CUIT', { transaction })
      await queryInterface.removeColumn('user', 'AFIPCondition', { transaction })
      await queryInterface.sequelize.query(`DROP TYPE IF EXISTS "enum_user_AFIPCondition"`, { transaction })
    })
  }
}
