#Javascript Unit Testing

###Directory Setup
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

###test/test.js: Import Modules & Write Tests
At the top of test.js, import the:
* Chai expect library  
* file in which you'll be writing your javascript code

###main.js: Set Up Export Module
Prepare to add code to the module.exports object by adding the following to main.js:
```
module.exports = {
  //code goes here
};
```



###Stretch
Convert your code to ES2015 syntax.
push solution repo to this repo
