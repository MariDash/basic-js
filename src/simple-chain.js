const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position > 0) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr.length = 0;
      throw new Error(`error`);
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let Array = [...this.arr];
    this.arr.length = 0;
    return Array.join('~~');
  }
};

module.exports = chainMaker;
