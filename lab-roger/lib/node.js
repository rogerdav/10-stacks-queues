'use strict';

module.exports = class {
  constructor(val) {
    if(!val) return new Error('Value must be passed in');
    this.val = val;
    this.next = null;

  }

};
