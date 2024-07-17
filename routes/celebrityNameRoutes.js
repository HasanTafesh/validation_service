const express = require('express');
const router = express.Router();
const celebrityNameController = require('../controllers/celebrityNameController');

router.post('/', celebrityNameController.createCelebrityName);
router.put('/:id', celebrityNameController.updateCelebrityName);
router.delete('/:id', celebrityNameController.deleteCelebrityName);
router.get('/:id', celebrityNameController.getCelebrityName);
router.get('/', celebrityNameController.getAllCelebrityNames);

module.exports = router;
