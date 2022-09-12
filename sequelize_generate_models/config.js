const SequelizeAuto = require('sequelize-auto');

var mysql_config ={
    host: 'localhost',
    port: '3306',
    database : 'iot_broker_db',
    user: 'root',
    pass: 'root4444',
    dialect: 'mysql'
}

// sequelize-auto -h localhost -d iot_broker_db 
// -u root -x root4444 -p 3306  --dialect mysql -o ./model

const auto = new SequelizeAuto(mysql_config.database,mysql_config.user, mysql_config.pass, {
    host: mysql_config.host,
    dialect: mysql_config.dialect,
    directory: './models', // where to write files
    port: mysql_config.port,
    caseModel: 's', // c:convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 's', // c:file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    // tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted
    //...
})


auto.run().then(data => {
    console.log(data.tables);      // table and field list
    console.log(data.foreignKeys); // table foreign key list
    console.log(data.indexes);     // table indexes
    console.log(data.hasTriggerTables); // tables that have triggers
    console.log(data.relations);   // relationships between models
    console.log(data.text)         // text of generated models
  });