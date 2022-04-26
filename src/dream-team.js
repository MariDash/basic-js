const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  let i = 0;
  while (i < members.length) {
    if (typeof members[i] == "string") {
      members[i] = members[i].replace(/\s/g, "").toUpperCase();
      arr.push(members[i][0]);
    }
    i++;
  }
  return arr.sort().join("");
}

module.exports = {
  createDreamTeam,
};
