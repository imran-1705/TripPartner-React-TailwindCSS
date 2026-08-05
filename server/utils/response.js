const successResponse = (res, status, data, message) => {
  res.status(status).json({ message, data });
};

module.exports = successResponse;
