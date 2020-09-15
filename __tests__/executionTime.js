const { getFibonacci, getFibonacciBinet, getFibonacciFast } = require('../src');

console.log('This test can take a lot of time!');

console.time('Time for getFibonacci(50)');
getFibonacci(50);
console.timeEnd('Time for getFibonacci(50)');

console.time('Time for getFibonacciBinet(50)');
getFibonacciBinet(50);
console.timeEnd('Time for getFibonacciBinet(50)');

console.time('Time for getFibonacciFast(50)');
getFibonacciFast(50);
console.timeEnd('Time for getFibonacciFast(50)');
