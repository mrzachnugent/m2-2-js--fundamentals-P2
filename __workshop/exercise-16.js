// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  let numArr;
  let emptyArr = [];
  for (let oG = num1; oG <= num2; oG++) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    numArr = oG
      .toString()
      .split("")
      .map((x) => x ** 3)
      .reduce(reducer);
    emptyArr.push(numArr);
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

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
