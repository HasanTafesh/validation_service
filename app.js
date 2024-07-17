const express = require('express');
const bodyParser = require('body-parser');
const validationRoutes = require('./routes/validationRoutes');
const badWordRoutes = require('./routes/badWordRoutes');
const celebrityNameRoutes = require('./routes/celebrityNameRoutes');
const emailDomainRoutes = require('./routes/emailDomainRoutes');
const areaCodeRoutes = require('./routes/areaCodeRoutes');
const { loadAllToCache } = require('./services/cacheService');

const app = express();
app.use(bodyParser.json());

app.use('/api/validation', validationRoutes);
app.use('/api/badwords', badWordRoutes);
app.use('/api/celebritynames', celebrityNameRoutes);
app.use('/api/emaildomains', emailDomainRoutes);
app.use('/api/areacodes', areaCodeRoutes);

loadAllToCache()
  .then(() => console.log('Cache is loaded'))
  .catch(err => console.error('Error loading cache:', err));

module.exports = app;
