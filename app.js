const express = require(`express`);
const PORT = process.env.PORT || 8080;


let app = express();

 app.use((req,res,next) =>       //kuunnellaan, yksi use per sivu
 {
console.log(`path : ${req.path}`);
next();
 });


app.use(`/test`,(req,res,next) =>       //kuunnellaan, yksi use per sivu
{
console.log(`path : ${req.path}`);
console.log("Ollaan testissä");
next();
});


 app.get(`/`,(req,res,next)=>
 {
res.send("Hello World!");
//res.write();
//res.end();
 });
// app.post()

app.use((req,res,next) =>       //kuunnellaan, yksi use per sivu
 {
     res.status(404);
     res.send("Page not found");

 });




app.listen(PORT);