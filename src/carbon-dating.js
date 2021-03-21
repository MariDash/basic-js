const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if (typeof (str) == ('string')) {
    let num = Number(str)
    if ((typeof (num) !== 'number') || (num >= 15) || (num <= 0) || isNaN(num)) {
      return false
    } else {
      result = (Math.log(15 / num) / (0.693 / 5730));
      return Math.ceil(result)
    }
  } else { return false }
};
