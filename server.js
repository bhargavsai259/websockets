const Websocket = require("ws");

const wss = new Websocket.Server({port:8080})


wss.on("connection",(socket)=>{


    console.log("client connected")

    socket.send("connected");

   

})