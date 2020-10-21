module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mercadoPagoPayoutMethod', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      payoutMethodId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'payoutMethod',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('mercadoPagoPayoutMethod')
  }
}
