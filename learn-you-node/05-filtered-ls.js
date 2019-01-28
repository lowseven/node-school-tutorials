const fs = require('fs');
const path = process.argv[2];
const extension = '.' + process.argv[3];


fs.readdir(path, (err, data) => {
  const files = data.filter((filePath) => {
    return filePath.endsWith(extension);
  });

  files.map((value) => {
    console.log(value);
  });
});