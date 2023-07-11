const { info, error } = require("./logger");

const requestLogger = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  const body = JSON.stringify(req.body);

  info(`${method} ${path} ${body}`);
  next();
};

const errorHandler = (err, req, res, next) => {
  error(err.name, err.message);
  // type of error can be found in err.name
  next(err);
};

module.exports = { requestLogger, errorHandler };
