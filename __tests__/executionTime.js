const { getFibonacci, getFibonacciBinet, getFibonacciFast } = require('../src');

const number = +process.argv[2] || 50;

console.log('This test can take a lot of time!');

console.time(`Time for getFibonacci(${number})`);
getFibonacci(number);
console.timeEnd(`Time for getFibonacci(${number})`);

console.time(`Time for getFibonacciBinet(${number})`);
getFibonacciBinet(number);
console.timeEnd(`Time for getFibonacciBinet(${number})`);

console.time(`Time for getFibonacciFast(${number})`);
getFibonacciFast(number);
console.timeEnd(`Time for getFibonacciFast(${number})`);
