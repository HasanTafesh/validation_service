const express = require('express');
const router = express.Router();
const badWordController = require('../controllers/badWordController');

router.post('/', badWordController.createBadWord);
router.put('/:id', badWordController.updateBadWord);
router.delete('/:id', badWordController.deleteBadWord);
router.get('/:id', badWordController.getBadWord);
router.get('/', badWordController.getAllBadWords);

module.exports = router;
