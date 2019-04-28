module.exports = (req, res, next) => {
  res.sendOk = (payload) => {
    res.status(200).json({ status: 'OK', ...payload });
  };
  res.sendError = (statusCode, status, payload) => {
    res.status(statusCode).json({ status, ...payload });
  };
  next();
};
