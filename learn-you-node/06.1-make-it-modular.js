const fs = require('fs');

module.exports = function(dirPath, extension, callback) {
  fs.readdir(dirPath, (err, data) => {
    if(err) 
      return callback(err, null);

    const files = data.filter((filePath) => {
      return filePath.endsWith('.' + extension);
    });

    callback(null, files);
  });  
}
