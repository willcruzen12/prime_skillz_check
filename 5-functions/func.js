// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
var stepOne = function() {
  return 4;
}
console.log(stepOne());
// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
var stepTwo = function(numOne, numTwo) {
  return numOne * numTwo;
}
console.log(stepTwo(2, 5));
// 3 - Write a function expression
// that takes one argument and
// console logs that value.
function stepThree(){
  return 8
}
console.log(stepThree());
// 4 - Write a function declaration
// that takes a number and divides it
// by two.
var stepFour = function(number) {
  return number / 2;
}
console.log(stepFour(10));
// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.
console.log(stepTwo(stepFour(10, 20)));
