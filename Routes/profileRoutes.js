const express = require('express');
const profileController = require('../Controllers/profileController');

const router = express.Router();

router.post('/profile/', profileController.updateProfile);

module.exports = router;
