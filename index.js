// const http = require("http");
// const fs = require("fs");

// const port = 3007;
// const hostName = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./pages/home.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./pages/about.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile("./pages/contacat.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     fs.readFile("./pages/error.html", (err, data) => {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(port, hostName, () => {
//   console.log(`Server run at this http://${hostName}:${port}`);
// });

const http = require("http");
const fs = require("fs");

const port = 3009;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (filePath, statusCode) => {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile("./pages/home.html", 200);
  } else if (req.url === "/about") {
    handleReadFile("./pages/about.html", 200);
  } else if (req.url === "/contact") {
    handleReadFile("./pages/contacat.html", 200);
  } else {
    handleReadFile("./pages/error.html", 404);
  }
});
server.listen(port, hostName, () => {
  console.log(`run at this http://${hostName}:${port}`);
});
