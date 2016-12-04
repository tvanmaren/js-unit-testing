'use strict';

module.exports = {

  greeting: (name) => {
    // if (arguments.length !== 1) {
    //   return 'Function accepts exactly one argument';
    // }
    if (typeof name !== 'string') {
      return "Function accepts only string arguments";
    }
    return `Hello, ${name}`;
  },

  reduce: (arr) => {
    if (!arr || !Array.isArray(arr)){
      return 'unacceptable input';
    }

    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return 'array includes non-number';
      }
    }

    return arr.reduce((a, b) => {
      return a + b;
    }, 0);

  }

};
