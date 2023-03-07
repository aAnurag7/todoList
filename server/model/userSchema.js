const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
  if(this.isModified()){
    this.password = await bcrypt.hash(this.password,12)
  }
  next();
})

userSchema.methods.generateAuthToken = async function(){
  try{ 
     let token = jwt.sign({_id:this._id}, 'MDSFHSKAHFDJKBAKJSBSAJKBFJSDKFDSGSDGSDGSD')
      // this.tokens = this.tokens.concat({token:token})
      // await this.save()
     return token
  }catch(err){
    console.log(err);
  }
}
const User = mongoose.model('users',userSchema);
module.exports = User;