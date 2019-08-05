const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,32}$/)
        }

        const { error, value } = Joi.validate(req.body, schema);
        if (error) {
            switch(error.details[0].context.key) {
                case 'email':
                res.status(400).send({
                    error: 'Please provide a valid email address.'
                })
                break;
                case 'password':
                res.status(400).send({
                    error: 'Your password must contain a capital letter, an alphanumeric value and a minimum of 6 letters'
                })
                break;
                case 'default':
                res.status(400).send({
                    error: 'Something went wrong with your registration. Please try again.'
                })
            }
        } else {
            next();
        }
    }
}

