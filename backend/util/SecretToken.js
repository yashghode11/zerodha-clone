const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign(
    {
      id: id.toString(),
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: "3d",
    }
  );
};