const {
  rateLimit: { resetPeriodInMs },
} = require('../configs/settings');
const { increaseKeyValue, setTimeoutOnKey } = require('./redis');

const increaseCount = async (key) => {
  const { value: count, timeoutInMs: remainTimeInMs } = await increaseKeyValue(
    key,
  );
  if (count === 1 && remainTimeInMs === -1) {
    await setTimeoutOnKey(key, resetPeriodInMs);
  }
  return {
    count,
    remainTimeInMs: remainTimeInMs === -1 ? resetPeriodInMs : remainTimeInMs,
  };
};

module.exports = {
  increaseCount,
};
