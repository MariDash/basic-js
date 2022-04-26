const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  if (typeof options.repeatTimes == "undefined") {
    options.repeatTimes = 1;
  }

  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }

  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  String(options.addition);

  if (typeof options.additionRepeatTimes == "undefined") {
    options.additionRepeatTimes = 1;
  }

  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  let result = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let y = 0; y < options.additionRepeatTimes; y++) {
      result += options.addition;
      if (y < options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
