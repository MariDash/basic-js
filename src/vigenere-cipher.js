const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (message == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let mPos;
    let kPos;
    let counter = 0;
    let result = [];

    for (let i = 0; i < message.length; i++) {
      mPos = alphabet.indexOf(message[i]);

      if (mPos === -1) {
        result.push(message[i]);
        continue;
      }

      kPos = alphabet.indexOf(key[counter % key.length]);
      result.push(alphabet[(mPos + kPos) % 26]);
      counter++;
    }
    return this.type ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (encryptedMessage == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();

    let mPos;
    let kPos;
    let counter = 0;
    let result = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      mPos = alphabet.indexOf(encryptedMessage[i]);

      if (mPos === -1) {
        result.push(encryptedMessage[i]);
        continue;
      }

      kPos = alphabet.indexOf(key[counter % key.length]);
      result.push(alphabet[(mPos - kPos + 26) % 26]);
      counter++;
    }
    return this.type ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
