const ExpressError = require('./expressError');

// checks if valid input and converts string to array of numbers
function checkInput(input) {
    if (!input) {
      throw new ExpressError("Numbers are required.", 400);
    }
  
    const nums = input.split(',').map((num) => {
      if (isNaN(parseInt(num))) {
        throw new ExpressError(`${num} is not a number.`, 400);
      }
      return parseInt(num);
    });
    return nums;
  }

  module.exports = { checkInput };