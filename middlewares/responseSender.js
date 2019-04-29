module.exports = (req, res, next) => {
  res.sendOk = (payload) => {
    res.status(200).send(payload);
  };
  res.sendError = (statusCode) => {
    res.status(statusCode).send('Error');
  };
  next();
};
