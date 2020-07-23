var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - Posts
 *     description: get posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: returns all posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Ok
 *                 message:
 *                   type: string
 *                   example: returns all posts
 *             
 */
router.get('/', async (req, res) => {
  res.status(200).json({
    status: 'Ok',
    message: 'GET on posts'
  });
});

module.exports = router;