const {
  rateLimit: { maxCountNumber },
} = require('../configs/settings');
const { TooManyRequests } = require('../utils/error');
const { increaseCount } = require('../utils/rateLimitStore');

module.exports = async (req, _, next) => {
  try {
    const { ip } = req;
    const { count } = await increaseCount(ip);
    req.count = count;
    if (count > maxCountNumber) {
      throw new TooManyRequests();
    }
    next();
  } catch (error) {
    next(error);
  }
};
