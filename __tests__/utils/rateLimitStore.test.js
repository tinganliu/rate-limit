const { increaseCount } = require('../../utils/rateLimitStore');
const {
  increaseKeyValue,
  setTimeoutOnKey,
} = require('../../utils/redis');

jest.mock('../../utils/redis');

describe('increaseCount', () => {
  const key = 'KEY';
  const resetPeriodInMs = 60000;

  beforeEach(() => {
    increaseKeyValue.mockReset();
    setTimeoutOnKey.mockReset();
  });

  it('should call setTimeoutOnKey if count is 1', async () => {
    increaseKeyValue.mockResolvedValue({
      value: 1,
      timeoutInMs: -1,
    });
    setTimeoutOnKey.mockResolvedValue();
    const res = await increaseCount(key);
    expect(setTimeoutOnKey).toBeCalledWith(key, resetPeriodInMs);
    expect(res).toEqual({
      count: 1,
      remainTimeInMs: resetPeriodInMs,
    });
  });

  it('should not call setTimeoutOnKey if count is not 1', async () => {
    const count = 2;
    const timeoutInMs = 100;
    increaseKeyValue.mockResolvedValue({
      value: count,
      timeoutInMs,
    });
    setTimeoutOnKey.mockResolvedValue();
    const res = await increaseCount(key);
    expect(setTimeoutOnKey).not.toHaveBeenCalled();
    expect(res).toEqual({
      count,
      remainTimeInMs: timeoutInMs,
    });
  });
});
