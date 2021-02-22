const express = require('express');
const router = express.Router();
const local = require('../controllers/localcontroller');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'local', // Title (required)
      version: '1.0.0', // Version (required)
    },
    produces: ["application/json"],
    consumes: ["application/json"]
  },
  // Path to the API docs
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @swagger
 * /district/{matp}:
 *   get:
 *     summary: Get districts
 *     description:
 *       "Required roles: `user`"
 *     tags:
 *       - local
 *     parameters:
 *       - name: matp
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/district/:matp', local.getDistricts);

/**
 * @swagger
 * /ward/{maqh}:
 *   get:
 *     summary: Get wards
 *     description:
 *       "Required roles: `user`"
 *     tags:
 *       - local
 *     parameters:
 *       - name: maqh
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/ward/:maqh', local.getWards);

/**
 * @swagger
 * /searchlocation/{key}:
 *   get:
 *     summary: Search location from ward, district and city
 *     description:
 *       "Required roles: `user`"
 *     tags:
 *       - local
 *     parameters:
 *       - name: key
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/searchlocation/:key', local.searchLocation);

module.exports = router;
