const mongoose = require("mongoose");
const dotenv =require('dotenv');
dotenv.config({path:'./config.env'});
const key = process.env.SECRET_KEY;

const boardSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  data: [],
});

const Board = mongoose.model("board", boardSchema);
boardSchema.methods.update = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      key
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = Board;
