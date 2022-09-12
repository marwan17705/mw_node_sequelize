var DataTypes = require("sequelize").DataTypes;
var _device_profile = require("./device_profile");
var _device_session = require("./device_session");
var _webhook_profile = require("./webhook_profile");

function initModels(sequelize) {
  var device_profile = _device_profile(sequelize, DataTypes);
  var device_session = _device_session(sequelize, DataTypes);
  var webhook_profile = _webhook_profile(sequelize, DataTypes);

  device_session.belongsTo(device_profile, { as: "device", foreignKey: "device_id"});
  device_profile.hasMany(device_session, { as: "device_sessions", foreignKey: "device_id"});
  device_profile.belongsTo(webhook_profile, { as: "webhook", foreignKey: "webhook_id"});
  webhook_profile.hasMany(device_profile, { as: "device_profiles", foreignKey: "webhook_id"});

  return {
    device_profile,
    device_session,
    webhook_profile,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
