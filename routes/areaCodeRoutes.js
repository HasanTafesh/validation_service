const express = require('express');
const router = express.Router();
const areaCodeController = require('../controllers/areaCodeController');

router.post('/', areaCodeController.createAreaCode);
router.put('/:id', areaCodeController.updateAreaCode);
router.delete('/:id', areaCodeController.deleteAreaCode);
router.get('/:id', areaCodeController.getAreaCode);
router.get('/', areaCodeController.getAllAreaCodes);

module.exports = router;
