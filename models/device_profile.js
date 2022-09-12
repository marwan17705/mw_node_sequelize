const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_profile', {
    device_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    webhook_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'webhook_profile',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    battery_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'device_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device_id" },
        ]
      },
      {
        name: "webhook_id",
        using: "BTREE",
        fields: [
          { name: "webhook_id" },
        ]
      },
    ]
  });
};
