const Redis = require('ioredis');

const redis = new Redis({ keyPrefix: 'rateLimit:' });

const increaseKeyValue = async (key) => {
  const [
    [, value],
    [, timeoutInMs],
  ] = await redis.multi().incr(key).pttl(key).exec();
  return { value, timeoutInMs };
};

const setTimeoutOnKey = async (key, timeoutInMs) => {
  const res = await redis.pexpire(key, timeoutInMs);
  if (!res) {
    throw Error(`${key} does not exist`);
  }
};

module.exports = {
  increaseKeyValue,
  setTimeoutOnKey,
};
