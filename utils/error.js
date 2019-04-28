class AppError extends Error {
  constructor(payload) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.payload = payload;
  }
}

class ParamsError extends AppError {}
class UnauthorizedError extends AppError {}
class ForbiddenError extends AppError {}
class NotFoundError extends AppError {}
class ConflictError extends AppError {}
class UnprocessableError extends AppError {}

module.exports = {
  AppError,
  ParamsError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  UnprocessableError,
};
