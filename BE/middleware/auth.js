const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Verify the token here (e.g., using JWT)
  // If valid, call next()
  // If invalid, return an error response
  next();
};

module.exports = { auth };
