export default (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'PAIR',
        'GROUP'
      ],
      allowNull: false
    },
    minParticipants: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxParticipants: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    validate: {
      participantsAmount () {
        if (this.maxParticipants && this.maxParticipants < this.minParticipants) {
          throw new Error('El máximo de participantes debe ser superior o igual al mínimo')
        }
      }
    }
  })

  // Associations
  Group.associate = (models) => {
    Group.belongsTo(models.product)
  }

  return Group
}
