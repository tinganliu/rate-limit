const {
  ParamsError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  UnprocessableError,
} = require('../utils/error');

module.exports = (error, req, res, next) => { // eslint-disable-line
  switch (error.constructor) {
    case ParamsError:
      return res.sendError(400, 'PARAMS_ERROR', error.payload);
    case UnauthorizedError:
      return res.sendError(401, 'UNAUTHORIZED');
    case ForbiddenError:
      return res.sendError(403, 'FORBIDDEN');
    case NotFoundError:
      return res.sendError(404, 'NOT_FOUND');
    case ConflictError:
      return res.sendError(409, 'CONFLICT');
    case UnprocessableError:
      return res.sendError(422, 'UNPROCESSABLE_ENTITY');
    default:
      console.error(error);
      return res.sendError(500, 'SERVER_ERROR');
  }
};
