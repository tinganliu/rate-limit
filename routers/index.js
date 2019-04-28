const express = require('express');

const apiV1Router = require('./apiV1');

const router = express.Router();

router.use('/api/v1', apiV1Router);

module.exports = router;
