const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcryptjs')
require('../DB/connection')
const User = require('../model/userSchema');
const { Board } = require('../model/boardschema');
const authenticate = require('../middleware/authenticate.js');
const { getdata, updataboarddata } = require('./board')

router.post('/create/user', (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(422).json({ err: 'Invalid credentials' })
    }
    try {
        User.findOne({ email: email }).then((userexist) => {
            if (userexist) {
                return res.status(422).json({ err: "email already exist" })
            }
            const user = new User({ name: fullname, email, password });
            user.save().then(() => {
                res.status(201).json({ message: "succesfully register" })
            }).catch((err) => {
                res.status(500).json({ err: "failed register" })
            })
        }).catch(err => console.log(err))
    } catch (err) {
        res.status(500).send('server error')
    };
})

router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const userlogin = await User.findOne({ email: email });
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Unauthorized" })
            }
            else {
                token = await userlogin.generateAuthToken()
                res.cookie("jwttoken", token, {
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                    httpOnly: true
                })
                res.json({ token })
            }
        } else { return res.status(404).json({ message: "User not found" }) }
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
})

router.get('/board', authenticate, async (req, res) => {
    try {
        console.log('welcome to your board')
        let userdata = await getdata(req, res)
        res.send(userdata);
    } catch (err) {
        console.log(err)
        res.status(500).send('server error')
    }
})
router.put('/board/:id', (req, res) => {
    try {
        updataboarddata(req, res);
    }
    catch (err) {
        res.status(500).send('server error')
    }

});

module.exports = router;   