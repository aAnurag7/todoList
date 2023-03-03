const express = require('express');
const User = require('./model/userSchema')
const app = express();
app.use(express.json())


app.use(require('./router/auth'))

 
app.listen(4000,()=>{
    console.log('listening to port 4000')
})  