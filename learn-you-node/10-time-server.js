const net = require('net');
const strTime = require('strftime');

const port = process.argv[2];
const server = net.createServer((socket) => {
  const date = strTime('%F %H:%M', new Date(new Date().getTime())) + '\n';
  socket.end(date);
});
server.listen(port);
