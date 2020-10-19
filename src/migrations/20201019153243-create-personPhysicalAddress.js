module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('personPhysicalAddress', {
      personId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'person',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      physicalAddressId: {
        type: Sequelize.UUID,
        allowNull: false,
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
    return queryInterface.dropTable('personPhysicalAddress')
  }
}
