module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userBusiness', {
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      businessId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'business',
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
    return queryInterface.dropTable('userBusiness')
  }
}
