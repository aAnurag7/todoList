const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy
passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});
passport.use(new GoogleStrategy({
    clientID : "317744419303-o39pt2vrt6i2uu69kfg7be8lgtk2j3uh.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "http://localhost:8000/google/callback",
    passReqToCallback : true
},async function(req , accessToken , refreshToken , profile , done){
    console.log(req,accessToken,refreshToken);
    return done(null,profile);
}));