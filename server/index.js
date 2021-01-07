const express = require("express");
const app = express();

const WSServer = require("express-ws")(app);

const PORT = process.env.PORT || 5000;

app.ws("/", (ws, req) => {
  console.log("Connected");
});

app.listen(PORT, () => console.log(`SERVER START, PORT: ${PORT}`));
