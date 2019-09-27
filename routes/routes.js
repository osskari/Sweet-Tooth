const express = require('express');
const routes = express();

routes.use(require('./candyRoutes'));
routes.use(require('./offerRoutes'));
routes.use(require('./pinataRoutes'));

module.exports = routes;
