const add = (str) => {
  //return string
  return (
    str
      //Allow new lines instead of commas, just change split
      .split("\n")
      //Reduce list and add them together, but split every line with a comma
      .reduce((list, line) => {
        return list.concat(line.split(","));
      }, [])
      //using function toNumber to get new array
      .map(toNumber)
      // reduce array to one value Step 2
      .reduce((sum, num) => {
        //Return input
        return sum + num;
        //Else return 0
      }, 0)
  );
};
//node requirement
module.exports = {
  add,
};
//function to convert str to int
function toNumber(str) {
  return parseInt(str) || 0; //read string and to number
}
