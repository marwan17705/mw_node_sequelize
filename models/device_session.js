const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_session', {
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(16),
      allowNull: true,
      references: {
        model: 'device_profile',
        key: 'device_id'
      }
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
    tableName: 'device_session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "device_id",
        using: "BTREE",
        fields: [
          { name: "device_id" },
        ]
      },
    ]
  });
};
