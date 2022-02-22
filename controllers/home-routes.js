// contains all user-facing routes (homepage & login)

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;