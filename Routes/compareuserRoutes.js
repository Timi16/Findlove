const express = require('express');
const router = express.Router();
const { compareUsers } = require('../Controllers/compareuserController');

// Route to compare users based on usernames
router.post('/compare-users', compareUsers);

module.exports = router;
