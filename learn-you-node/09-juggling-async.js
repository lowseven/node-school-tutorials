const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const queue = [];
urls.forEach((url, index) => {
  http.get(url, (res) => {
    res.setEncoding('utf8');

    res.pipe(bl((err, data) => {
        queue[index] = data.toString();
        if (queue.length === urls.length) {
          queue.forEach((result) => {
            console.log(result);
          });
        }
      }));    
    }); 
     
});
