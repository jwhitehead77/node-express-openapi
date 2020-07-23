var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /ping:
 *   get:
 *     tags:
 *       - HealthCheck
 *     description: GET on ping
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A simple ping health check
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: PING
 *                 message:
 *                   type: string
 *                   example: This is a sample node express openapi
 *             
 */
router.get('/', async (req, res) => {
  res.status(200).json({
    status: 'PING',
    message: 'This is a sample node express openapi'
  });
});

module.exports = router;