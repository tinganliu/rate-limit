const {
  ParamsError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  UnprocessableError,
  TooManyRequests,
} = require('../utils/error');

module.exports = (error, req, res, next) => { // eslint-disable-line
  switch (error.constructor) {
    case ParamsError:
      return res.sendError(400);
    case UnauthorizedError:
      return res.sendError(401);
    case ForbiddenError:
      return res.sendError(403);
    case NotFoundError:
      return res.sendError(404);
    case ConflictError:
      return res.sendError(409);
    case UnprocessableError:
      return res.sendError(422);
    case TooManyRequests:
      return res.sendError(429);
    default:
      console.error(error);
      return res.sendError(500);
  }
};
