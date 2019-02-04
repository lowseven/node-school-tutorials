//my solution
module.exports = (str) => /"\w+[\w+\s]*"/g.test(str);

//solution: "[^"]*"
