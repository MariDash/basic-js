const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from("" + n);
  let newArr = [];
  arr.map((number) => {
    let arrDublicate = arr.slice();
    let index = arrDublicate.findIndex((num) => num == number);
    arrDublicate.splice(index, 1);
    newArr.push(arrDublicate.join(""));
  });
  return +newArr.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit,
};
