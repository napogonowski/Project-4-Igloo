module.exports = function (req, res, next) {
  // user status code of 401 unauthorized
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
};
