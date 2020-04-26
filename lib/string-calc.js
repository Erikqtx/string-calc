const add = (str) => {
  return str
    .split(",")
    .map(toNumber)
    .reduce((sum, num) => {
      return sum + num;
    }, 0);
};

module.exports = {
  add,
};

function toNumber(str) {
  return parseInt(str) || 0;
}
