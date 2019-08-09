const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/authenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
router.post('/login', AuthenticationController.login);


// Export API routes
module.exports = router;
