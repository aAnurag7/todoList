const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const app = express();

app.use(cookieparser());
app.use(bodyparser.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./router/auth"));
app.get("/login1", (req, res) => {
  console.log("login not avalidas");
  return res.status(200).send("nice");
});
app.listen(5000, () => {
  console.log("listening to port 4000");
});
