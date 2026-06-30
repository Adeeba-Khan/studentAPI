
const db =  require('../utils/db-connection');
const Student = require('../models/student');
const addEnteries = async (req,res)=>{
try{
    const {name,email,age}=req.body;


const student = await Student.create({
    email:email,
    name:name,
    age:age
});


res.status(201).send(`User with name: ${name} is created`)
}
catch (error){
res.status(500).send(error.message);
    // const insertQuery=`Insert into students (name, email, age) values (?,?,?)`;
    // db.execute(insertQuery,[name, email, age],(err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
            
    //         return;
    //     }

    //     console.log("Data inserted");
    //     res.status(200).send(`Data inserted with name ${name}`);
    // });
}}

const getEnteries= (req,res)=>{
    const getQuery='Select * from students';
    db.execute(getQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
         if(result.affectedRows===0){
            res.status(404).send("No rows found");
         }
        console.log("Details obtained");
        res.status(200).send(result);
    
    })
}
const getEnteriesID= (req,res)=>{
    const {id}= req.params;
    const getQuery='Select * from students where id = ?';
    db.execute(getQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        //  if(result.affectedRows===0){
        //     res.status(404).send("No rows found");
        //  }
        console.log("Details obtained");
        res.status(200).send(result);
    
    })
}

const updateEnteries= async (req,res)=>{
try{
    const {id}= req.params;
    const {name,email}=req.body;
   

const student= await Student.findByPk(id);
if(!student){
res.status(404).send("User is not found");
}
student.name=name;
await student.save();
res.status(200).send("User has been updated!")}
catch (error) {
res.status(500).send("User cannot be updated");}
    // const getQuery='update students set name=? , email=? where id = ?';
    // db.execute(getQuery,[name,email,id],(err,result)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //      if(result.affectedRows===0){
    //         res.status(404).send("No rows found");
    //      }
    //     console.log("Details result updated");
    //     res.status(200).send(`Student name ${name} has been updated`);
    
    // })
}

const deleteEnteries= async (req,res)=>{
try {
const {id}= req.params;
const student= await Student.destroy({
where: {
id:id
}
})
if(!student) {
res.status(404).send('User is not found');
}
res.status(200).send('User is deleted');

} catch (error) {
console.log(error);
res.status(500).send('Error encountered while deleting.');}
    // const {id}= req.params;
    // const getQuery='delete from students where id = ?';
    // db.execute(getQuery,[id],(err,result)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //      if(result.affectedRows===0){
    //         res.status(404).send("No rows found");
    //      }
    //     console.log("Details obtained");
    //     res.status(200).send(`id ${id} is deleted`);
    
    // })
}
module.exports = {
    addEnteries,getEnteries, getEnteriesID, updateEnteries,deleteEnteries
};
