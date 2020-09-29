// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  let string = str;
  let allBString = string.match(/B/g);
  if (allBString === null) {
    return 0;
  } else {
    let count = allBString.length;
    return count;
  }
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countBs;
