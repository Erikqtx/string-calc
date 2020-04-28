const add = (str) => {
  //return string
  return (
    str
      //seperate by ,
      .split(",")
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

function toNumber(str) {
  return parseInt(str) || 0; //read string and to number
}
