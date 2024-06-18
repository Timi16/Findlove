const express = require('express');
const profileController = require('../Controllers/profileController');

const router = express.Router();

router.post('/profile', profileController.createOrUpdateProfile);
router.get('/profile/:username', profileController.getProfile);

module.exports = router;
