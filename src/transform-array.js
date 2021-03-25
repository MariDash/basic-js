const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //let newArr = []
  //let i = 0
  //while (i < arr.length) {
  //  newnwearr = newArr.push(arr[i])
  //  i++
  //}
  /*if (!arr) {
    throw new Error('error')
  } else if (!arr.length) {
    return []
  }
  let newarr = [...numbers]

  if (newarr.includes('--discard-next')) {
    index = newarr.indexOf('--discard-next')
    newarr.splice(index, 2)
    return (newarr)
  } else if (newarr.includes('--discard-prev')) {
    index = newarr.indexOf('--discard-prev')
    newarr.splice((index - 1), 2)
    return (newarr)
  } else if (newarr.includes('--double-next')) {
    index = newarr.indexOf('--double-next')

  } else if (arr.includes('--double-prev')) {
    index = arr.indexOf('--double-prev')

  }
*/

  if (Array.isArray(arr) == false) {
    throw new Error('error')
  } else if (arr.length == 0) {
    return []
  }
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {

    if (i === newArr.length - 1 && (newArr[i] === '--discard-next' || newArr[i] === '--double-next')) {
      newArr[i] = ' ';
    } else if (newArr[i] === '--discard-next' && i !== newArr.length - 1) {
      newArr[i] = ' ';
      newArr[i + 1] = ' ';
    } else if (i === 0 && (newArr[i] === '--discard-prev' || newArr[i] === '--double-prev')) {
      newArr[i] = ' ';
    } else if (newArr[i] === '--discard-prev' && i !== 0) {
      newArr[i - 1] = ' ';
      newArr[i] = ' ';
    } else if (newArr[i] === '--double-next' && i !== newArr.length - 1) {
      newArr[i] = newArr[i + 1];
    } else if (newArr[i] === '--double-prev' && i !== 0) {
      newArr[i] = newArr[i - 1];
    }
  }
  return newArr.filter(elem => (elem !== ' '))
};

