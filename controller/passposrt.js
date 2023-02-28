const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy
passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});
passport.use(new GoogleStrategy({
    clientID : "317744419303-0ksflrgi4hqrk2mr6hh4t93b4kh1mli9.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "http://localhost:8000/google/callback",
    passReqToCallback : true
},async function(req , accessToken , refreshToken , profile , done){
    return done(null,profile);
}));
