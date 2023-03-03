const express = require('express');
const User = require('./model/userSchema')
const app = express();
app.use(express.json())

let fakedata = {
    name : "anurag",
    password: "anurag"
}
app.use(require('./router/auth'))


app.post('/user/create',(req,res)=>{
   let data = req.body
   console.log(data);
res.send('ok')
})
 
app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('hello');
}) 
  
app.listen(4000,()=>{
    console.log('listening to port 6000')
}) 