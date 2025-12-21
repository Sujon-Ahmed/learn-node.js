let http = Node.require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/server-status") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Server is running smoothly.\n");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found\n");
    }
  })
  .listen(8080, () => {
    console.log("Server listening on port 8080");
  });
