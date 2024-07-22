const express = require('express');
const router = express.Router();
const areaCodeController = require('../controllers/areaCodeController');

/**
 * @swagger
 * /api/areacodes:
 *   post:
 *     summary: Create a new area code
 *     tags: [Area Codes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               areaCode:
 *                 type: string
 *                 example: "123"
 *     responses:
 *       201:
 *         description: Area code created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', areaCodeController.createAreaCode);

/**
 * @swagger
 * /api/areacodes/{id}:
 *   put:
 *     summary: Update an area code by ID
 *     tags: [Area Codes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The area code ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               areaCode:
 *                 type: string
 *                 example: "123"
 *     responses:
 *       200:
 *         description: Area code updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Area code not found
 */
router.put('/:id', areaCodeController.updateAreaCode);

/**
 * @swagger
 * /api/areacodes/{id}:
 *   delete:
 *     summary: Delete an area code by ID
 *     tags: [Area Codes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The area code ID
 *     responses:
 *       200:
 *         description: Area code deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Area code not found
 */
router.delete('/:id', areaCodeController.deleteAreaCode);

/**
 * @swagger
 * /api/areacodes/{id}:
 *   get:
 *     summary: Get an area code by ID
 *     tags: [Area Codes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The area code ID
 *     responses:
 *       200:
 *         description: Area code retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Area code not found
 */
router.get('/:id', areaCodeController.getAreaCode);

/**
 * @swagger
 * /api/areacodes:
 *   get:
 *     summary: Get all area codes
 *     tags: [Area Codes]
 *     responses:
 *       200:
 *         description: List of area codes
 *       400:
 *         description: Bad request
 */
router.get('/', areaCodeController.getAllAreaCodes);

module.exports = router;
