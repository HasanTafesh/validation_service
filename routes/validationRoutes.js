const express = require('express');
const { validate } = require('../controllers/validationController');
const checkApiKey = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/validate', checkApiKey, validate);

module.exports = router;
