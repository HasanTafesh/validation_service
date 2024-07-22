const express = require('express');
const router = express.Router();
const celebrityNameController = require('../controllers/celebrityNameController');

/**
 * @swagger
 * /api/celebritynames:
 *   post:
 *     summary: Create a new celebrity name
 *     tags: [Celebrity Names]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Celebrity First Name"
 *               lastName:
 *                 type: string
 *                 example: "Celebrity Last Name"
 * 
 *     responses:
 *       201:
 *         description: Celebrity name created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', celebrityNameController.createCelebrityName);

/**
 * @swagger
 * /api/celebritynames/{id}:
 *   put:
 *     summary: Update a celebrity name by ID
 *     tags: [Celebrity Names]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The celebrity name ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Celebrity First Name"
 *               lastName:
 *                 type: string
 *                 example: "Celebrity Last Name"
 *     responses:
 *       200:
 *         description: Celebrity name updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Celebrity name not found
 */
router.put('/:id', celebrityNameController.updateCelebrityName);

/**
 * @swagger
 * /api/celebritynames/{id}:
 *   delete:
 *     summary: Delete a celebrity name by ID
 *     tags: [Celebrity Names]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The celebrity name ID
 *     responses:
 *       200:
 *         description: Celebrity name deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Celebrity name not found
 */
router.delete('/:id', celebrityNameController.deleteCelebrityName);

/**
 * @swagger
 * /api/celebritynames/{id}:
 *   get:
 *     summary: Get a celebrity name by ID
 *     tags: [Celebrity Names]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The celebrity name ID
 *     responses:
 *       200:
 *         description: Celebrity name retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Celebrity name not found
 */
router.get('/:id', celebrityNameController.getCelebrityName);

/**
 * @swagger
 * /api/celebritynames:
 *   get:
 *     summary: Get all celebrity names
 *     tags: [Celebrity Names]
 *     responses:
 *       200:
 *         description: List of celebrity names
 *       400:
 *         description: Bad request
 */
router.get('/', celebrityNameController.getAllCelebrityNames);

module.exports = router;
