const myModule = require('./06.1-make-it-modular');
const dirPath = process.argv[2];
const extension = process.argv[3];

myModule(dirPath, extension, (err, data) => {
  if(err)
    console.log(err);
  else {
    data.map((value) => {
      console.log(value);
    });
  }
})