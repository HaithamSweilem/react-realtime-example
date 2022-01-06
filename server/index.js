import {Server} from "socket.io";
const port = 4000;

const s = new Server({
    cors: {
      // origin of react app
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

s.on('connection', (client) => {
  console.info("Client connected: ", client);

  client.on('subscribeToTimer', (interval) => {
    console.info("Client is subscribing to timer with interval", interval);

    setInterval(() => {
      client.emit('timer', new Date());
    }, interval)
  });
});

s.listen(port);

console.info("Listening on port ", port);
