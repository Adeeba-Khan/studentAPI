const express = require('express');
// const mysql = require('mysql2');
const router = require('./routes/studentRoutes');
const app = express();


app.use(express.json());
app.use("/students",router);

app.listen(4000,()=>{
           console.log("Server is connected to port 4000");
})