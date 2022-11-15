// function errorHandler(err, req, res, next) {
//   if (typeof err === "string") {
//     // custom application error
//     return res.status(400).json({ message: err });
//   }

//   if (err.name === "UnauthorizedError") {
//     // jwt authentication error
//     return res.status(401).json({ message: "Invalid Token" });
//   }

//   // validation error
//   if (err.name === "ValidationError") {
//     return res.status(400).json({ message: err.message });
//   }

//   return res.status(500).json(err);
// }

function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "The user is not authorized" });
  }

  if (err.name === "ValidationError") {
    //  validation error
    return res.status(401).json({ message: err });
  }

  // default to 500 server error
  return res.status(500).json(err);
}

module.exports = errorHandler;
