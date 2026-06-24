const {Sequelize}= require('sequelize');

const sequelize= new Sequelize('testDB2','root','202508',{
host: 'localhost',
dialect: 'mysql'
})

(async ()=>{try {

await sequelize.authenticate();
console.log("Connection to the Database has been created");

} catch (error) {

console.log(error);}
})();

module.exports=sequelize;

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '202508',
//     database: 'testDB2'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }

//     console.log("Connection is established");

//     const createTableQuery = `
//         CREATE TABLE IF NOT EXISTS students (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(100),
//             email VARCHAR(100) UNIQUE,
//             age INT
//         )
//     `;

//     connection.execute(createTableQuery, (err) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }

//         console.log("Students table created successfully");
//     });
// });

// module.exports = connection;