var express = require('express');
var router = express();

router.use(require('./candyRoutes'));
router.use(require('./offerRoutes'));
router.use(require('./pinataRoutes'));

module.exports = router;