const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = [];
  let i = 0;
  while (i < matrix.length) {
    for (let y = 0; y < matrix[i].length; y++) {
      arr.push(matrix[i][y]);
    }
    i++;
  }

  let result = [];
  arr.filter(function (item, i) {
    if (item === "^^") {
      result.push(arr[i]);
    }
  });

  return result.length;
}

module.exports = {
  countCats,
};
