module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payoutMethod', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      businessId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'business',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payoutMethod')
  }
}
