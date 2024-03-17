const http = require("http"); //require http and npm init
const fs = require("fs"); //require fs(fileSystem)

const PORT = 3000;
const hosaName = "127.0.0.1";

// ! create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./pages/home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./pages/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("./pages/contacat.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./pages/error.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});
server.listen(PORT, hosaName, () => {
  console.log(`Server run at http://${hosaName}:${PORT}`);
});
