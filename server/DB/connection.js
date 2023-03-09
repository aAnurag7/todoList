const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const DB =
  "mongodb+srv://anurag:anuragchatur@cluster0.r9fqxa8.mongodb.net/?retryWrites=true&w=majority";
const db1 = process.env.DATABSE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succesful");
  });
