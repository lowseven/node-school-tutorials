const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
  const { statusCode } = res;
  if (statusCode === 200) {
    res.setEncoding('utf8')
       .on('data', console.log)
       .on('error', console.error);
  } else {
    res.resume();
    return;
  }
});
