const express = require('express');
const User = require('./model/userSchema')
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const passport = require('passport')
require('./router/passport')
const app = express();
const cookieSession = require('cookie-session')
app.use(cookieSession({
    name:"ankiut", 
    secret: "secretkey344sfsd3",
    keys:['key1','key2'],
    saveUninitialized:true,
    cookie: { maxAge:1000},
    // resave: false  
})); 
app.use(passport.session());
app.use(passport.initialize());
app.use(cookieparser())
app.use(bodyparser.json())
const corsOptions ={
    origin:'*', 
    credentials:true, 
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))
app.use(express.json())
app.use(require('./router/auth'))
app.get('/login1',(req,res)=>{
    console.log('login not avalidas')
    return res.status(200).send('nice');
})
app.get('/google',passport.authenticate('google',{scope:['profile','email']}));
app.get('/google/callback',passport.authenticate('google',{failureRedirect: '/'}),(req,res)=>{
    // session=req.session;
    googleAddData(req);
    session.userid = req.user.email;
    res.render('user');
})
app.listen(4000,()=>{
    console.log('listening to port 4000')
})   