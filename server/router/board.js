const Board = require("../model/boardschema");

async function getdata(req, res) {
  try {
    const userdata = await Board.findOne({ email: req.rootUser.email });
    if (userdata) {
      req.userdata = userdata;
      return userdata;
    } else {
      const board = new Board({ email: req.rootUser.email });
      board
        .save()
        .then(() => {
          res.status(201).json(board);
        })
        .catch((err) => {
          res.status(500).json({ err: "board not created" });
        });
    }
  } catch (err) {
    res.status(500).send("server error");
  }
}

async function updataboarddata(req, res) {
  const userboard = await Board.findOne({ email: req.rootUser.email });
  console.log(req.body);
  console.log("\nanruag chud gya\n");
  if (userboard) {
    userboard.data = req.body;
    userboard.save().then(() => {
      console.log("upadate succesfuly");
      res.status(201).send(userboard);
    });
  } else {
    res.status(404).send("user not found");
  }
}

module.exports = { getdata, updataboarddata };
