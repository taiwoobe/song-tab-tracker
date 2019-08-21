const express = require('express');
const router = express.Router();
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const AuthenticationController = require('../controllers/authenticationController');
const songsController = require('../controllers/songController');
const recentlyViewedController = require('../controllers/recentlyViewedController');
const isAuthenticated = require('../policies/isAuthenticated');

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.post('/songs', songsController.createSong);
router.get('/songs', songsController.getSongs);
router.get('/songs/:id', songsController.getSong);
router.put('/songs/:id', songsController.updateSong);
router.get('/recentlyViewed', isAuthenticated, recentlyViewedController.getRecentlyViewed);
router.post('/recentlyViewed', recentlyViewedController.createRecentlyViewed);


// Export API routes
module.exports = router;
