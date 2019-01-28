const url = require('url');
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsed = url.parse(req.url, true);
    const date = new Date(parsed.query.iso);
    res.writeHead(200, { 'content-type': 'application/json' });
    if (parsed.pathname === '/api/parsetime')  {
      res.end(JSON.stringify({
        hour:   date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }));
    } else if (parsed.pathname === '/api/unixtime') {
      res.end(JSON.stringify({
        'unixtime': date.getTime()
      }));
    }
  }
});

server.listen(port);
