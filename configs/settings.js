const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const loadConfig = filename => yaml.load(
  fs.readFileSync(path.resolve(__dirname, filename), 'utf8'),
)[process.env.NODE_ENV || 'development'];

module.exports = loadConfig('settings.yml');
