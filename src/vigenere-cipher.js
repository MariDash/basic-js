const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }


  encrypt(message, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (message == undefined || key == undefined) {
      throw new Error('Error')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let mPos
    let kPos
    let counter = 0
    let result = []

    for (let i = 0; i < message.length; i++) {
      mPos = alphabet.indexOf(message[i]);

      if (mPos === -1) {
        result.push(message[i])
        continue;
      }

      kPos = alphabet.indexOf(key[counter % key.length]);
      result.push(alphabet[(mPos + kPos) % 26]);
      counter++;
    }
    return this.type ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (encryptedMessage == undefined || key == undefined) {
      throw new Error('Error');
    }
    //encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let mPos
    let kPos
    let counter = 0
    let result = []

    for (let i = 0; i < encryptedMessage.length; i++) {
      mPos = alphabet.indexOf(encryptedMessage[i])

      if (mPos === -1) {
        result.push(encryptedMessage[i])
        continue;
      }

      kPos = alphabet.indexOf(key[counter % key.length]);
      result.push(alphabet[(mPos - kPos + 26) % 26]);
      counter++;
    }

    return this.type ? result.join("") : result.reverse().join("");
  }
}


module.exports = VigenereCipheringMachine;
