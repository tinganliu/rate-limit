const path = require('path');
const { createLogger, format, transports } = require('winston');

const { log } = require('../configs/settings');

const formatter = format.printf((info) => {
  const isoDate = (new Date(info.timestamp)).toISOString();
  return `[${isoDate} #${process.pid}] ${info.level.toUpperCase()}: ${info.message}`;
});

const standardTransport = new transports.Console({
  handleExceptions: true,
});

const fileTransport = new transports.File({
  handleExceptions: true,
  filename: path.resolve(__dirname, '..', log.dirname, log.filename),
});

const logger = createLogger({
  level: log.level,
  format: format.combine(
    format.timestamp(),
    formatter,
  ),
  transports: [standardTransport, fileTransport],
  exitOnError: false,
});

module.exports = logger;
