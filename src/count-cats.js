const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = []
  let i = 0;
  while (i < matrix.length) {
    for (let y = 0; y < matrix[i].length; y++) {
      arr.push(matrix[i][y])
    }
    i++
  }

  let allCats = []
  arr.filter(function (item, i) {
    if (item === ('^^')) {
      allCats.push(arr[i])
    }
  });
  return allCats.length;
};