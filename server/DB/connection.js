const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const db1 = process.env.DATABASE;
mongoose
  .connect(db1, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succesful");
  }).catch((err)=>{console.log('connection failed')});
