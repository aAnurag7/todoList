const Board = require('../model/boardschema');

async function getdata(req,res){
    const userdata = await Board.findOne({ email: req.rootUser.email });
    if(userdata){
        req.userdata = userdata;
        return userdata;
    }
    else{
        const board = new Board({email:req.rootUser.email});
        board.save().then(() => {
        res.status(201).json({ message: "board added" })
     }).catch((err) => {
        res.status(500).json({ err: "board not created" })
     })
    }
}

 async function updataboarddata(req,res){
    const userboard = await Board.findOne({ _id:req.params.id});

    if(userboard){
       userboard.data = req.body.data;
       console.log(userboard)
       userboard.save().then(()=>{
       console.log('upadate succesfuly')
       res.status(201).send(userboard);
       })
    }
    else{
       res.status(401).send('user not found')
    }
    
}

module.exports = {getdata, updataboarddata};