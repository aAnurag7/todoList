const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcryptjs')
require('../DB/connection')
const User = require('../model/userSchema')


router.get('/users/detail', async (req, res) => {
    let data = await User.find();

    res.send(data);
})

router.post('/create/user', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ err: 'plz fill detail properly' })
    }
    try {
        User.findOne({ email: email }).then((userexist) => {
            if (userexist) {
                return res.status(422).json({ err: "email already exist" })
            }
            const user = new User({ name, email, password });
            user.save().then(() => {
                res.status(201).json({ message: "succesfully register" })
            }).catch((err) => {
                res.status(500).json({ err: "failed register" })
            })
        }).catch(err => console.log(err))
    } catch (err) { console.log(err) };
})

router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz filled the data" })
        }
        const userlogin = await User.findOne({ email: email });
        console.log(userlogin)
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
           
           token = await userlogin.generateAuthToken()
             console.log(token)
           res.cookie("jwttoken",token,{
            expires:new Date(Date.now() + 1000*60*60*24),
            httpOnly:true
           })

            if (!isMatch) {
                return res.status(400).json({ message: "user error" })
            }
            else {
                res.json({ message: "user sigin succesfuly" })
            }
        } else { return res.status(400).json({ message: "user error" }) }
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;