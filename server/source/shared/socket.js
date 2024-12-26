const io = require("socket.io")();
const socketapi = {
    io: io
};

io.on("connection", function(socket) {
    console.log( " A user connected");

    socket.on('disconnect', function() {
        console.log(" User Disconnected" );
    });

    socket.on('chat message', (msg) => {
        console.log("Message: " + msg);
    });

    socket.on('move', function(json) {
        
    });
});

module.exports = socketapi;