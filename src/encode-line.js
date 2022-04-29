const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  str = Array.from(str);
  let i = 0;
  while (i < str.length) {
    let sum = 0;
    if (str[i] == str[i + 1]) {
      sum += 2;
      if (str[i] == str[i + 2]) {
        sum += 1;
        if (str[i] == str[i + 3]) {
          sum += 1;
        }
      }
    }

    if (sum == 0) {
      result.push(str[i]);
      i++;
    } else {
      result.push(sum);
      result.push(str[i]);
      i = i + sum;
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
