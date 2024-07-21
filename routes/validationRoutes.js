/**
 * @swagger
 * /api/validation/validate:
 *   post:
 *     summary: Validate input data
 *     description: Validates the provided email, phone number, and full name
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *           required:
 *             - email
 *             - phone
 *             - firstName
 *             - lastName
 *     responses:
 *       200:
 *         description: Validation result
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 valid:
 *                   type: boolean
 *                 reason:
 *                   type: string
 *             phone:
 *               type: object
 *               properties:
 *                 phone:
 *                   type: string
 *                 valid:
 *                   type: boolean
 *             fullName:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 valid:
 *                   type: boolean
 *                 reason:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *     security:
 *       - apiKey: []
 */

const express = require('express');
const { validate } = require('../controllers/validationController');
const checkApiKey = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/validate', checkApiKey, validate);

module.exports = router;
