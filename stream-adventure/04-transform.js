let data = '';
process
  .stdin
  .on('data', (chunk) => {
    data += chunk.toString().toUpperCase();
    a.push(chunk.toString().length);
  }).on('end', () => {
    process.stdout.write(`${data}`);
});
