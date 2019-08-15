const express = require('express');
const router = express.Router();
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const AuthenticationController = require('../controllers/authenticationController');
const songsController = require('../controllers/songController');

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.post('/songs', songsController.createSong);
router.get('/songs', songsController.getSongs);
router.get('/songs/:id', songsController.getSong);


// Export API routes
module.exports = router;
