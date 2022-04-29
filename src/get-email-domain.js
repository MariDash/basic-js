const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = Array.from(email).reverse();
  email.splice(email.indexOf("@"));
  return email.reverse().join("");
}

module.exports = {
  getEmailDomain,
};
