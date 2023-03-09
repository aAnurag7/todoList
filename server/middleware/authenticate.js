const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const authenticate = async (req, res, next) => {
  try {
    let token = req.cookies.jwttoken;
    if (req.headers.authorization) {
      token = JSON.parse(req.headers.authorization).token;
    }
    const verifyToken = jwt.verify(
      token,
      "MDSFHSKAHFDJKBAKJSBSAJKBFJSDKFDSGSDGSDGSD"
    );
    const rootUser = await User.findOne({ _id: verifyToken._id });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authenticate;
