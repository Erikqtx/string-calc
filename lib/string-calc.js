const add = (str) => {
  return (
    str
      //newline split
      .split("\n")
      //reduce a array to one value
      .reduce((list, line) => {
        return list.concat(line.split(","));
      }, [])
      .map(toNumber)
      .reduce((sum, num) => {
        return sum + num;
      }, 0)
  );
};
//node requirement
module.exports = {
  add,
};
//function str to int
function toNumber(str) {
  return parseInt(str) || 0;
}
