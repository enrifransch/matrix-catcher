require('./config/config');

const _ = require('lodash');
const express = require('express');

const bodyParser = require('body-parser');

// Routes.
const scanRoutes = require('./routes/scan');
const scanResultRoutes = require('./routes/scanResult');
const targetRoutes = require('./routes/target');
const btsRoutes = require('./routes/bts');

const port = 3000;
var app = express();

// Middleware.
app.use(bodyParser.json());
app.use('/api', scanRoutes());
app.use('/api', scanResultRoutes());
app.use('/api', targetRoutes());
app.use('/api', btsRoutes());

// Start listening the specified port.
app.listen(port, () => {
    console.log(`App started on port: ${port}`);
});

// Export the module.
module.exports = {app};