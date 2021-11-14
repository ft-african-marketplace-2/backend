const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const tokenBuilder = require("./token-builder");

router.get("/", (req, res) => {
  res.json({ message: "auth router working" });
});

router.post("/signup", (req, res, next) => {
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 6);

  Users.insertUser({ username, password: hash })
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch(next);
});
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({ status: 401, message: "username and password required" });
  }
  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //CREATING TOKEN AND APPEND IT TO RESPONSE HERE
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `${user.username} is back`,
          token,
        });
      } else {
        next({ status: 401, message: "invalid credentials" });
      }
    })
    .catch(next);
});

module.exports = router;
