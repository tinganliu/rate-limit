const express = require('express');

const router = express.Router();

router.get('/', (_, res) => res.sendOk());

module.exports = router;
