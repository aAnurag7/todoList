const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

userSchema.pre('save',async function(next){
//   if(this.isModified()){
    this.password = bcrypt.hash(this.password,12)
//   }
  next();
})
const User = mongoose.model('users',userSchema);
module.exports = User;