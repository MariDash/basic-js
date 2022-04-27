const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length == 0) {
    return [];
  }
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (
      i === newArr.length - 1 &&
      (newArr[i] === "--discard-next" || newArr[i] === "--double-next")
    ) {
      newArr[i] = " ";
    } else if (newArr[i] === "--discard-next" && i !== newArr.length - 1) {
      newArr[i] = " ";
      newArr[i + 1] = " ";
    } else if (
      i === 0 &&
      (newArr[i] === "--discard-prev" || newArr[i] === "--double-prev")
    ) {
      newArr[i] = " ";
    } else if (newArr[i] === "--discard-prev" && i !== 0) {
      newArr[i - 1] = " ";
      newArr[i] = " ";
    } else if (newArr[i] === "--double-next" && i !== newArr.length - 1) {
      newArr[i] = newArr[i + 1];
    } else if (newArr[i] === "--double-prev" && i !== 0) {
      newArr[i] = newArr[i - 1];
    }
  }
  return newArr.filter((elem) => elem !== " ");
}

module.exports = {
  transform,
};
