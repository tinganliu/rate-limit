const express = require('express');

const rateLimit = require('../middlewares/rateLimit');

const router = express.Router();

router.get('/', rateLimit, (req, res) => {
  const { count } = req;
  res.sendOk(count.toString());
});

module.exports = router;
