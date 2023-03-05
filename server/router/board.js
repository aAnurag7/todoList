const Board = require('../model/boardschema');


async function getdata(req){
    const userdata = await Board.findOne({ email: req.rootUser.email });
    req.userdata = userdata;
     return userdata;
}



module.exports = {getdata};