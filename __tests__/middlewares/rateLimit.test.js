const rateLimit = require('../../middlewares/rateLimit');
const { TooManyRequests } = require('../../utils/error');
const { increaseCount } = require('../../utils/rateLimitStore');

jest.mock('../../utils/rateLimitStore');

describe('rateLimit', () => {
  const ip = '192.168.0.1';
  const next = jest.fn();
  const getMockReq = () => ({ ip });

  beforeEach(() => {
    next.mockReset();
    increaseCount.mockReset();
  });

  it('should set count on req and call next if count less than limit', async () => {
    const req = getMockReq();
    const count = 1;
    increaseCount.mockResolvedValue({ count });
    await rateLimit(req, null, next);
    expect(next).toBeCalledWith();
    expect(req).toEqual({ ip, count });
  });

  it('should set count on req and call next with TooManyRequests error if count exceed the limit', async () => {
    const req = getMockReq();
    const count = 99999;
    increaseCount.mockResolvedValue({ count });
    await rateLimit(req, null, next);
    expect(next).toBeCalledWith(new TooManyRequests());
    expect(req).toEqual({ ip, count });
  });
});
