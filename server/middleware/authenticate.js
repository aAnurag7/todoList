const jwt = require('jsonwebtoken')
const User = require("../model/userSchema")
const authenticate = async (req,res)=>{
 try{
   console.log('\nok\n')
    const token = req.cookies.jwttoken;
    const verifyToken = jwt.verify(token, 'MDSFHSKAHFDJKBAKJSBSAJKBFJSDKFDSGSDGSDGSD')
    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})    
    if(!rootUser){ throw new Error('User not found')}
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id
    next();
 } catch(err){
    res.status(401).send('Unathorized')
    console.log(err);
 }
}


module.exports = authenticate;