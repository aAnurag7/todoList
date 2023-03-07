const mongoose = require('mongoose');
const dotenv = require('dotenv')
const DB = "mongodb+srv://anurag:anuragchatur@cluster0.r9fqxa8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
  console.log('connection succesful')
})



