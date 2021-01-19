// Config
const { app, PORT } = require("./config");

// Handlers
const { connectionHandler } = require("./handlers");

app.ws("/", (ws, req) => {
  console.log("Successfully connected");

  ws.on("message", (msg) => {
    const msgToJson = JSON.parse(msg);
    switch (msgToJson.method) {
      case "connection": {
        connectionHandler(ws, msgToJson);
        break;
      }
    }
  });
});

app.listen(PORT, () => console.log(`SERVER START, PORT: ${PORT}`));
