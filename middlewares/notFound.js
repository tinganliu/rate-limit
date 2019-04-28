const { NotFoundError } = require('../utils/error');

module.exports = (req, res, next) => {
  next(new NotFoundError());
};
