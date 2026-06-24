const express = require('express');
// const mysql = require('mysql2');
const db =  require('./utils/db-connection');

const router = require('./routes/studentRoutes');
const app = express();


app.use(express.json());
app.use("/students",router);

const studenModel = require('./models/student');
db.sync({force:true}).then(()=>{
app.listen(4000,()=>{
           console.log("Server is connected to port 4000");
})
}).catch((err)=>{
console.log(err);
})
