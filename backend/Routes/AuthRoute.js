const router = require("express").Router();

const {
  Signup,
  Login,
} = require("../Controllers/AuthController");

const {
  userVerification,
} = require("../Middlewares.js/AuthMiddleware");

router.post("/signup", Signup);

router.post("/login", Login);

router.get("/verify", userVerification);

module.exports = router;