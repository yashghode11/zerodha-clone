const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No authentication token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.TOKEN_KEY
    );

    const user = await User.findById(decoded.id).select(
      "-password"
    );

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Verification Error:", error);

    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};