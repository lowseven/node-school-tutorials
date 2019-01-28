const split = require('split');
const through = require('through2');
let cont = 1; 

process.stdin
  .pipe(split())
  .pipe(through(function(line, enc, next) {
    if (cont%2) {
      this.push(line.toString().toLowerCase() + '\n');
    } else {
      this.push(line.toString().toUpperCase() + '\n');
    }
    cont++;
    next();
  }))
  .pipe(process.stdout);
