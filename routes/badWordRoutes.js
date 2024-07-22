const express = require('express');
const router = express.Router();
const badWordController = require('../controllers/badWordController');

/**
 * @swagger
 * /api/badwords:
 *   post:
 *     summary: Create a new bad word
 *     tags: [Bad Words]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               word:
 *                 type: string
 *                 example: "badword"
 *     responses:
 *       201:
 *         description: Bad word created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', badWordController.createBadWord);

/**
 * @swagger
 * /api/badwords/{id}:
 *   put:
 *     summary: Update a bad word by ID
 *     tags: [Bad Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bad word ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               word:
 *                 type: string
 *                 example: "badword"
 *     responses:
 *       200:
 *         description: Bad word updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Bad word not found
 */
router.put('/:id', badWordController.updateBadWord);

/**
 * @swagger
 * /api/badwords/{id}:
 *   delete:
 *     summary: Delete a bad word by ID
 *     tags: [Bad Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bad word ID
 *     responses:
 *       200:
 *         description: Bad word deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Bad word not found
 */
router.delete('/:id', badWordController.deleteBadWord);

/**
 * @swagger
 * /api/badwords/{id}:
 *   get:
 *     summary: Get a bad word by ID
 *     tags: [Bad Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bad word ID
 *     responses:
 *       200:
 *         description: Bad word retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Bad word not found
 */
router.get('/:id', badWordController.getBadWord);

/**
 * @swagger
 * /api/badwords:
 *   get:
 *     summary: Get all bad words
 *     tags: [Bad Words]
 *     responses:
 *       200:
 *         description: List of bad words
 *       400:
 *         description: Bad request
 */
router.get('/', badWordController.getAllBadWords);

module.exports = router;
