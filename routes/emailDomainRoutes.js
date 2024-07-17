const express = require('express');
const router = express.Router();
const emailDomainController = require('../controllers/emailDomainController');

router.post('/', emailDomainController.createEmailDomain);
router.put('/:id', emailDomainController.updateEmailDomain);
router.delete('/:id', emailDomainController.deleteEmailDomain);
router.get('/:id', emailDomainController.getEmailDomain);
router.get('/', emailDomainController.getAllEmailDomains);

module.exports = router;
