// Core
const express = require("express");
const app = express();

// Define
const WSServer = require("express-ws")(app);
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 5000;

module.exports = {
  app,
  PORT,
  aWss,
};
