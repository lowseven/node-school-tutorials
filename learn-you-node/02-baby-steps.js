const size = process.argv.length;
const values = process.argv.slice(2, size);

const result = values.reduce((acc, number) => {
  return acc + parseInt(number);
}, 0)

console.log(result);