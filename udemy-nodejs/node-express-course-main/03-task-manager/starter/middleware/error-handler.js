const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(err.status)
    .json({ msg: "Something went wrong. Please try again later" });
};

module.exports = errorHandlerMiddleware;
