// const SequelizeAuto = require('sequelize-auto');
const { initModels } = require("./models/init-models");
const sequelize = require('./utils/database.js');

const { webhook_profile,device_profile } = initModels(sequelize);


async function run() {
    try {
        const cust = await webhook_profile.findOne({ where: { "id": 1 } });
        console.log(cust.endpoint);
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
// sequelize-auto -h localhost -d iot_broker_db 
// -u root -x root4444 -p 3306  --dialect mysql -o ./model



run().catch(err => console.error(err));