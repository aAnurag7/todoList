const express =require('express')
const path = require('path')
const app = express();
const cookieSession = require('cookie-session');
require('./passposrt')
const session =require('express-session')
app.use(session({
name: 'google-auth-session',
secret:'ypueses',
keys: ['key1', 'key2']
}));
const passport = require('passport')
app.use(passport.initialize());
app.use(passport.session()); 
app.use('/static', express.static(path.join(__dirname,'../', 'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','/view/home.html'))
})

app.get('/Signup',(req,res)=>{
    res.sendFile(path.join(__dirname, '..','/view/signup.html'));
})
app.get('/user',(req,res)=>{
   res.send('hello')
})
app.get('/google',passport.authenticate('google',{scope:['profile','email']}));
app.get('/google/callback',passport.authenticate('google',{failureRedirect: '/'}),(req,res)=>{
    res.send('hello')
})
app.listen(8000,()=>{
    console.log('listening at port 8000');
})    