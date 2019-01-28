  var ws = require('websocket-stream');
  var stream = ws('ws://localhost:8099');
  stream.write('hello\n');
  // there is a bug with this challenge
  // https://github.com/workshopper/stream-adventure/issues/195
  