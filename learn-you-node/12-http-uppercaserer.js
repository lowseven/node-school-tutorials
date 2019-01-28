const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let rawData = '';
    req.on('data', (chunk) => {
      rawData += chunk;
    })
    .on('end', () => {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.end(rawData.toLocaleUpperCase());
    });
  }
});

server.listen(port);
