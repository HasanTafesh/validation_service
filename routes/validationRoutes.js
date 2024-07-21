// validationRoutes.js
const express = require('express');
const { validate } = require('../controllers/validationController');
const checkApiKey = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/validation/validate:
 *   post:
 *     summary: Validate input data
 *     description: Validates the provided email, phone number, and full name.
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Input data to validate
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *             required:
 *               - email
 *               - phone
 *               - firstname
 *               - lastname
 *     responses:
 *       200:
 *         description: Validation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                     valid:
 *                       type: boolean
 *                     reason:
 *                       type: string
 *                 phone:
 *                   type: object
 *                   properties:
 *                     phone:
 *                       type: string
 *                     valid:
 *                       type: boolean
 *                 fullname:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                     valid:
 *                       type: boolean
 *                     reason:
 *                       type: string
 *       401:
 *         description: Unauthorized
 */
router.post('/validate', checkApiKey, validate);

module.exports = router;
