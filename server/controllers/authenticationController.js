User = require('../models/userModel');

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            res.json({
                status: "success",
                message: 'User created sucessfully.',
                data: user
            });
        } catch(err) {
            res.status(400).send({
                error: 'The email you entered already exists.'
            })
        }
    },
    async login (req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email });
            const isPasswordValid = password === user.password;
            if (!user || !isPasswordValid){
                return res.status(403).send({
                    error: 'The Login information was incorrect.'
                })
            }
            res.json({
                status: "success",
                message: 'User login sucessfully.',
                data: user
            });
        } catch(err) {
            res.status(500).send({
                error: 'Something went wrong trying to log you in. Try again.'
            })
        }
    }
}

