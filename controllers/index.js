// use to collect packaged group of API endpoints & prefix w/ the path /api
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// generates error message if request an incorrect resource 
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;