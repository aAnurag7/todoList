const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
require('../DB/connection')
const User = require('../model/userSchema')
router.get('/',(req,res)=>{
   res.send('home router')
})

router.post('/register',(req,res)=>{
   const {name, email,password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({err :'plz fill detail properly'})
    }
    try{
    User.findOne({email:email}).then((userexist)=>{
        if(userexist){
            return res.status(422).json({err:"email already exist"})
        }
        const user = new User({name, email, password});


        user.save().then(()=>{
            res.status(201).json({message: "succesfully register"})
        }).catch((err)=>{
            res.status(500).json({err:"failed register"})
        })
    }).catch(err => console.log(err))
} catch(err){console.log(err)};
})

router.post('/login',async (req,res)=>{
    try{
        const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({error: "plz filled the data"})
    }
    const userlogin = await User.findOne({email: email});
    console.log(userlogin)
    if(userlogin){
    const isMatch = await bcrypt.compare(password, userlogin.password);
    if(!isMatch){
        res.status(400).json({message: "user error"})
    }
    else{
        res.json({message: "user sigin succesfuly"})
    }
}else{res.status(400).json({message: "user error"})}
   } catch(err){
        console.log(err)
    }
    
    
})


module.exports = router;