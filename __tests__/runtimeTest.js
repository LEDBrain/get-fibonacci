const { getFibonacciFast } = require('../src');
const { performance } = require('perf_hooks');

let times = [];

const main = () => {
    for (let i = 0; i < 1000; i++) {
        const before = performance.now();
        getFibonacciFast(5000);
        const after = performance.now();
        times.push(after - before);
    }
    const avg = times.reduce((previous, current) => {
        return current + previous;
    });
    return avg / times.length;
};

const m = () => {
    let mains = [];
    for (let i = 0; i < 1000; i++) {
        let m = main();
        mains.push(m);
    }
    const avg = mains.reduce((pre, cur) => cur + pre);
    const sum = avg / mains.length;
    console.log(sum);
};

console.log(
    'This test, runs the "getFibonacciFast(n)" with n=5000 1 million times and gets an average execution time. This test will take some time'
);
m();
