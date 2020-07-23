const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample Node Express OpenAPI',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with OpenAPI OAS3',
      servers: ['http://localhost:5000'],      
    },
  },
  apis: ['app.js'],
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     description: request all customers
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
app.get('/customers', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },    
  ]);
});

app.listen(5000, () => {
  console.log(`Listening on port ${port}...`);
});