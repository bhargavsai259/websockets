const Websocket = require("ws");

const wss = new Websocket.Server({ port: 8080 });

wss.on("connection", (socket) => {

    socket.on("message", (msg) => {
        console.log("message i got from client:", msg.toString());

        wss.clients.forEach((client) => {
            
            if (client.readyState === Websocket.OPEN) {
                client.send("all should see me");
            }
        });

    });

});