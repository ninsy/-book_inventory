var http = require("http");

var server = http.createServer(function(req,res) {
    res.end("Hello world");
});

server.listen(3000, function() {
    console.log("Listenin on port 3000");
});