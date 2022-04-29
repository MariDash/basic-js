const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 1; i < names.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      if (names[j] == names[i]) {
        sum += 1;
      }
    }
    if (sum > 0) {
      let newName = names[i] + `(${sum})`;

      for (let j = 0; j < i; j++) {
        if (names[j] == newName) {
          newName = names[i] + `(${sum + 1})`;
        }
      }
      names.splice(i, 1, newName);
    }
  }
  return names;
}

module.exports = {
  renameFiles,
};
