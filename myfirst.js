let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello, this is my first Node.js server!\n");
  })
  .listen(8080);
