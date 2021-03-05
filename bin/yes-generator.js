#!/usr/bin/env node

var args = process.argv.splice(process.execArgv.length + 2);
var yesGenerator = require('../dist/app');

yesGenerator.main();

console.log('Generating Modules is my job');