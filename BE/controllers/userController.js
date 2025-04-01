const ErrorHandling = require("../error/ErrorHandling");
const User = require("../models/User");
const crypto = require("crypto");
class UserController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new ErrorHandling("Need input", "Input missing", 422);
      }
      const token = crypto.randomBytes(32).toString("hex");

      await User.updateOne({ email }, { $set: { token } });

      User.findOne({ email, password })
        .then(async (user) => {
          if (!user) {
            throw new ErrorHandling("User not found", "User not found", 404);
          }
          // const token = crypto.randomBytes(32).toString("hex");

          // await User.updateOne({ email }, { $set: { token } });
          res.status(200).json({ ...user });
        })
        .catch((err) => {
          next(err);
        });
    } catch (e) {
      next(e);
    }
  }

  async signup(req, res, next) {
    try {
      const { email, password, name } = req.body;
      if (!email || !password) {
        throw new ErrorHandling("Need input", "Input missing", 422);
      }

      User.insertOne({
        email,
        password,
        name,
      })
        .then((user) => {
          res.status(201).json(user);
        })
        .catch((err) => {
          next(err);
        });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
