const router = require("express").Router();

const {
  Signup,
  Login,
  Logout,
} = require("../controllers/AuthController");

const {
  userVerification,
} = require("../Middlewares.js/AuthMiddleware");

router.post("/signup", Signup);

router.post("/login", Login);

router.get("/verify", userVerification);

router.post("/logout", Logout);

module.exports = router;