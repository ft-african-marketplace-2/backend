const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Users = require("./users/users-model");

const authRouter = require("./auth/auth-router");
const itemsRouter = require("./items/items-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/items", itemsRouter);

server.get("/", (req, res) => {
  res.json({ message: "Sanity Check Passed" });
});
server.get("/api/users", (req, res, next) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
