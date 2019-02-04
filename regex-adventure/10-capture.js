module.exports = (str) => {
    const match = /x\=(\d+)/.exec(str);
    return match ? match[1]: null;
}
