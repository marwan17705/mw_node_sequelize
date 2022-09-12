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
        singularize: true, // convert plural table names to singular model names
        additional: {
            timestamps: false
        }
    }
}
const sequelize = new Sequelize(mysql_config.database, mysql_config.user, mysql_config.pass, mysql_config.option);

// const connection = new Sequelize("db name", "username", "password");

// define article model
// const Article = sequelize.define("article", {
//     title: Sequelize.String,
//     content: Sequelize.String
// });
sequelize.sync();