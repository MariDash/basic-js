const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

  if (typeof (options.repeatTimes) == 'undefined') {
    options.repeatTimes = 1;
  }

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  }

  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  String(options.addition);

  if (typeof (options.additionRepeatTimes) == 'undefined') {
    options.additionRepeatTimes = 1;
  }

  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  let result = ''

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
