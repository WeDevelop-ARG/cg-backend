module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('businessPhysicalAddress', {
      businessId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'business',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      physicalAddressId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'physicalAddress',
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
    return queryInterface.dropTable('businessPhysicalAddress')
  }
}
