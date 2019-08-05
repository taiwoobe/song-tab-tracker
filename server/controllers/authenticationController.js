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
    }
}

