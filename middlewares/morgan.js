const morgan = require('morgan');

const logger = require('../utils/logger');

morgan.token('body', (req) => JSON.stringify(req.body));

module.exports = morgan(
  ':remote-addr :remote-user :method :url :status :response-time :body',
  { stream: { write: logger.info.bind(logger) } },
);
