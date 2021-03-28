const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }
  }
  decrypt() {
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error('Error');
    }
  }
}

module.exports = VigenereCipheringMachine;
