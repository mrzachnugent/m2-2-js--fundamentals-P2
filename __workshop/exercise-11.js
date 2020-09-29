// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  const reducer = (acc, cV) => acc + cV;
  let totalSum = grades.reduce(reducer);
  let avg = totalSum / grades.length;
  return Math.round(avg);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
