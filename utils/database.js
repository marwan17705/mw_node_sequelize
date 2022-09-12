const Sequelize = require('sequelize');

// connect db
var mysql_config = {
    database: 'iot_broker_db',
    user: 'root',
    pass: 'root4444',
    option: {
        host: 'localhost',
        dialect: 'mysql',
        directory: './models', // where to write files
        port: '3306',
        logging: true,
        singularize: true, // convert plural table names to singular model names
        additional: {
            timestamps: false
        }
    }
}
const sequelize = new Sequelize(mysql_config.database, mysql_config.user, mysql_config.pass, mysql_config.option);
module.exports = sequelize ;