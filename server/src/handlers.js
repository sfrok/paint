// Config
const { aWss } = require("./config");

const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
};

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(`${msg.username} was connected`);
    }
  });
};

module.exports = {
  connectionHandler,
};
