module.exports = (str) => {
    const match = /\bx=(\d+)\b/.exec(str);
    return match ? match[1]: null;
}
