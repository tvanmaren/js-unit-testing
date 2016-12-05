#Javascript Unit Testing

##Directory Setup

Build out a directory that is set up for testing:
```
$ mkdir js-unit-testing
$ cd js-unit-testing
$ git init
$ npm init -y
$ echo 'node_modules'>>.gitignore
$ npm install --save-dev chai mocha
```
Your `package.json` should include the following modification:
```
"scripts": {
  "test": "./node_modules/.bin/mocha -w"
}
```
```
$ touch main.js
$ mkdir test
$ cd test
$ touch test.js
```


Run the command `$ npm test` to make sure the Mocha and Chai npm modules are imported correctly. You should see `0 passing (2ms)` in your terminal.

**Note**: Running the command `mocha` will also run your tests, with one minor difference. Can you see what the difference is?

##main.js: Set Up Export Module
Prepare to add code to the `module.exports` object by adding the following to main.js:
```
module.exports = {
  //code goes here
};
```

##test/test.js: Import Modules & Write Tests
At the top of test.js, import the following:
* the Chai `expect` library  
* your `main.js` file

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
Once you've written code that passes your tests, fork & clone the [javascript-test-coverage](https://github.com/gSchool/javascript-test-coverage) repo and begin working through those exercises.

Be aware that test/test.js imports and uses the `assert` rather `expect` Chai library. Feel free to dig around the Chai docs to learn and use the `assert` style, or simply delete all code in `index.js` and start from scratch using the `expect` library used for the above exercise.
