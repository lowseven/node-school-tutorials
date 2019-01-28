const through = require('through2');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through(function(data, encoding, next) {
        this.push(data.toString().toUpperCase());
        next();
      }))
      .pipe(res);
  }
});

server.listen(process.argv[2]);
