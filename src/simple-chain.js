const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    console.log("position", position);
    if (position > 0) {
      this.arr.splice(position - 1, 1);
      return this;
    } else if (
      position <= 0 ||
      typeof position !== "number" ||
      this.arr.length < position
    ) {
      // this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let Array = [...this.arr];
    this.arr.length = 0;
    return Array.join("~~");
    if (position > 0) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
  },
};

module.exports = {
  chainMaker,
};
