const passport = require ('passport');

module.exports = function(req, res, next) {
    passport.authenticate('jwt', function(err, user) {
        if (err || !user) {
            res.send({
                error: 'You are not allowed to view this resource'
            })
        } else {
            req.user = user
            next()
        }
    }) (req, res, next)
}