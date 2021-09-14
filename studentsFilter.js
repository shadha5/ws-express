const studentsFilter = (res,req,next)=>{console.log("hello");
next();}
app.use(studentsFilter); 
module.exports= studentsFilter;