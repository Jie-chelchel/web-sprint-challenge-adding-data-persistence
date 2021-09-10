const express = require("express");
const projectRouter = require("./project/router");
const server = express();
server.use(express.json());
server.use("/api/projects", projectRouter);

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;
