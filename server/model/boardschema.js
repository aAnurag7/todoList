const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    data:[]
})

const Board = mongoose.model('board',boardSchema);
boardSchema.methods.update = async function(){
    try{ 
       let token = jwt.sign({_id:this._id}, 'MDSFHSKAHFDJKBAKJSBSAJKBFJSDKFDSGSDGSDGSD')
       return token
    }catch(err){
      console.log(err);
    }
  }

module.exports = Board;
