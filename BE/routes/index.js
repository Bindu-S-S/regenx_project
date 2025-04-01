var express = require("express");
const ErrorHandling = require("../error/ErrorHandling");
const userController = require("../controllers/userController");
const { auth } = require("../middleware/auth");
const PaperController = require("../controllers/PaperController");
var router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/papers/fetch", auth, PaperController.fetchAll);

// router.

module.exports = router;
