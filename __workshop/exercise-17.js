// Exercise 17
//
// Write a function that takes two arguments (numbers), and returns an array of
// all of the Armstrong numbers between.
//
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5
//
// e.g.
// 4    --> 4^1 = 4
// 371  --> 3^3 + 7^3 + 1^3 = 371
// 8208 --> 8^4 + 2^4 + 0^4 + 8^4 = 8208
//
// See this site to learn more about Narcissistic (Armstrong) numbers.
// http://mathworld.wolfram.com/NarcissisticNumber.html
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function findArmstrongNumbers(num1, num2) {
  let emptyArr = [];
  for (let oG = num1; oG <= num2; oG++) {
    numArr = oG.toString().split("");
    expo = numArr.length;
    let newArr = numArr.map((x) => x ** expo).reduce(reducer);
    emptyArr.push(newArr);
  }
  let ans = emptyArr.filter((num, index) => {
    if (num == index + num1) {
      return true;
    }
  });
  return ans;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findArmstrongNumbers(0, 1000000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findArmstrongNumbers;
