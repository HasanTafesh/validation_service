const express = require('express');
const router = express.Router();
const emailDomainController = require('../controllers/emailDomainController');

/**
 * @swagger
 * /api/emaildomains:
 *   post:
 *     summary: Create a new email domain
 *     tags: [Email Domains]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               domain:
 *                 type: string
 *                 example: "example.com"
 *     responses:
 *       201:
 *         description: Email domain created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', emailDomainController.createEmailDomain);

/**
 * @swagger
 * /api/emaildomains/{id}:
 *   put:
 *     summary: Update an email domain by ID
 *     tags: [Email Domains]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The email domain ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               domain:
 *                 type: string
 *                 example: "example.com"
 *     responses:
 *       200:
 *         description: Email domain updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Email domain not found
 */
router.put('/:id', emailDomainController.updateEmailDomain);

/**
 * @swagger
 * /api/emaildomains/{id}:
 *   delete:
 *     summary: Delete an email domain by ID
 *     tags: [Email Domains]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The email domain ID
 *     responses:
 *       200:
 *         description: Email domain deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Email domain not found
 */
router.delete('/:id', emailDomainController.deleteEmailDomain);

/**
 * @swagger
 * /api/emaildomains/{id}:
 *   get:
 *     summary: Get an email domain by ID
 *     tags: [Email Domains]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The email domain ID
 *     responses:
 *       200:
 *         description: Email domain retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Email domain not found
 */
router.get('/:id', emailDomainController.getEmailDomain);

/**
 * @swagger
 * /api/emaildomains:
 *   get:
 *     summary: Get all email domains
 *     tags: [Email Domains]
 *     responses:
 *       200:
 *         description: List of email domains
 *       400:
 *         description: Bad request
 */
router.get('/', emailDomainController.getAllEmailDomains);

module.exports = router;
