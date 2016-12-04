#Javascript Unit Testing

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
