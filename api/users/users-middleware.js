const Users = require("./users-model");

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  if (
    !username ||
    !password ||
    username.trim().length === 0 ||
    password.trim().length === 0 ||
    username.trim().length < 3 ||
    password.trim().length < 3
  ) {
    return next({
      status: 401,
      message:
        "username and password required, and must be at least 3 characters",
    });
  }
  const [user] = await Users.findBy({ username });
  if (user) {
    return next({ status: 401, message: "username taken" });
  }
  next();
};
