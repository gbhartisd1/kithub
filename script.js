// Example: Add functionality for a search bar or interactivity as needed
console.log("Kit Lounge script loaded!");
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);