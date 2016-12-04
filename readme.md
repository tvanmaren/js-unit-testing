#Javascript Unit Testing

##Directory Setup
If you haven't already, globally install Mocha:
```
$ npm install mocha -g
```

Next, build out a directory that is set up for testing:
```
$ mkdir js-unit-testing
$ cd js-unit-testing
$ git init
$ npm init -y
$ npm install --save-dev chai
$ touch main.js
$ mkdir test
$ cd test
$ touch test.js
```

Run the command `mocha` to make sure mocha and chai are set up correctly. You should see `0 passing (2ms)` in your terminal.

##main.js: Set Up Export Module
Prepare to add code to the module.exports object by adding the following to main.js:
```
module.exports = {
  //code goes here
};
```

##test/test.js: Import Modules & Write Tests
At the top of test.js, import the:
* Chai expect library  
* file in which you'll be writing your javascript code

###Write tests for the function "greeting":

**Input**: name, string (ex: 'Jennie')

**Output**: greeting that incorporates string input (ex: 'Hello, Jennie')

**Test for**:
* accepts only one argument
* input is a string
* output is a string
* output is expected string

###Write tests for the function "reduce":

**Input**: array of integers (ex: [3, 8, 12, 2])

**Output**: integer representing sum of all integers in array (ex: 25)

**Test for**:
* input is an array
* input array includes only numbers
* output is a number
* output is a sum of all elements

###Once You've Finished
Once you've written code that passes your tests, get started on the [javascript-test-coverage](https://github.com/gSchool/javascript-test-coverage) exercises. Be aware that these tests use the 'assert' rather 'expect' Chai library. Feel free to dig around the Chai docs to learn and use this other style, or simply delete all code in `index.js` and start from scratch using the `expect` library used for this exercise.
