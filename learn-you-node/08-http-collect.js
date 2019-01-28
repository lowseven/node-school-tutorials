const http = require('http');
const bl = require('bl');

const url = process.argv[2];
const outputQueue = [];

http.get(url, (res) => {
  if (res.statusCode === 200) {
    res.pipe(bl((err, data) => {
      const content = data.toString();
      console.log(`${content.length}\n${content}`);
    }));
  } else {
    res.resume()
    return;
  }
});
