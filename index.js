const express = require('express');
const path = require('path');
const app = express();
const students =require('./students');
const studentsFilter= require('./studentsFilter');


app.use(express.static(path.join(__dirname, "public")));
app.use(studentsFilter);
//get all students
app.get("/students", (req, res) => {
  res.send(students);
});
//get only one
app.get("/students/:id",(req,res)=>{
   res.json(students.filter ((el)=>{
      el.id===parseInt(req.params.id)

   }) )
});
const port = 5000;
app.listen(5000, (err) =>
  err
    ? console.log("error")
    : console.log(`serveur is runnning on port ${port} `)
);
