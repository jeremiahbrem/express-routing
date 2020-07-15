// returns the mean of an array of numbers
function mean(nums) {
  if (nums.length < 2) {
    return null;
  }
  const sum = nums.reduce((a,b) => {
    return a + b;
  }, 0);
  return sum / nums.length;
}

// returns the median of an array of numbers
function median(nums) {
  nums.sort((a,b)=>a-b);
  if (nums.length < 2) {
    return null;
  }
  else if (nums.length == 2) {
      return (+nums[0] + +nums[1]) / 2;
  }
  else if (nums.length % 2 != 0) {
    return nums[parseInt(nums.length / 2)];
  }
  else {
    let index = (nums.length / 2) - 1;
    return (nums[index] + +nums[index + 1]) / 2;
  }
}

// returns the mode of an array of numbers
function mode(nums) {
  nums.sort((a,b)=>a-b);
  let numFrequency = {};
  let max = 0;
  let mode = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numFrequency[num]) {
      numFrequency[num]++;
    }
    else {
      numFrequency[num] = 1;
    }
    max = (numFrequency[num] > max) ? numFrequency[num] : max;
  }
  for (let [key, value] of Object.entries(numFrequency)) {
    if (value == max) {
      mode.push(+key);
    }
  }
  return mode;
}

// mode('1,1,2,3');

module.exports = {mean: mean,
                  median: median,
                  mode: mode};