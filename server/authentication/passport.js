const passport = require ('passport')
const {User} = require('../models/userModel')
const config = require('../config/jwt')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}, async function(jwtPayload, done) {
    try {
        const user = await User.findOne({
            where: {
                id: jwtPayload._id
            }
        })
        if (!user) {
            console.log('User not found in DB');
            return done(err, false)
        } else {
            console.log('User found in DB');
            return done(null, user);
        }
    } catch(err) {
        return done(err, false);
    }
}))


module.exports = null;