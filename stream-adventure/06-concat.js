const concat = require('concat-stream');
process
  .stdin
  .pipe(concat((data) => {
    const output = data.toString().split('').reverse().join('');
    process.stdout.write(output);
  }))
