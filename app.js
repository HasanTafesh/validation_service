const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');
const validationRoutes = require('./routes/validationRoutes');
const badWordRoutes = require('./routes/badWordRoutes');
const celebrityNameRoutes = require('./routes/celebrityNameRoutes');
const emailDomainRoutes = require('./routes/emailDomainRoutes');
const areaCodeRoutes = require('./routes/areaCodeRoutes');
const { loadAllToCache } = require('./services/cacheService');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: swaggerDocument,
  apis: ['./routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/api/validation', validationRoutes);
app.use('/api/badwords', badWordRoutes);
app.use('/api/celebritynames', celebrityNameRoutes);
app.use('/api/emaildomains', emailDomainRoutes);
app.use('/api/areacodes', areaCodeRoutes);

loadAllToCache()
  .then(() => console.log('Cache is loaded'))
  .catch(err => console.error('Error loading cache:', err));

module.exports = app;
