/**
 * @description See https://en.wikipedia.org/wiki/Fibonacci_number for more infos. Note: This function will take a lot of time when n is a big number
 * @param {number} n
 * @returns {number} The n-th Fibonacci number
 */
const getFibonacci = n => {
    return n === 0
        ? 0
        : n === 1
        ? 1
        : getFibonacci(n - 1) + getFibonacci(n - 2);
};

/**
 * @description See https://en.wikipedia.org/wiki/Fibonacci_number#Closed-form_expression. Note: This **is** faster than the 'normal' algorithm but **will** be inexact with big numbers because it only returns an approximation.
 * @param {number} n
 * @returns {number} The n-th Fibonacci number
 */
const getFibonacciBinet = n => {
    const { abs, sqrt, round } = Math;
    const näherung =
        (1 / sqrt(5)) * (((1 + sqrt(5)) / 2) ** n - ((1 - sqrt(5)) / 2) ** n);
    return round(abs(näherung));
};

/**
 * @description Note: This is faster, more efficient and more exact then any other function this package provides
 * @param {number} n
 * @returns {number} The n-th Fibonacci number
 */
const getFibonacciFast = n => {
    let last = BigInt(1);
    let slast = BigInt(0);
    for (let _ = 0; _ < n; _++) {
        let temp = last;
        last = slast;
        slast = temp + last;
    }
    return slast;
};

module.exports = { getFibonacci, getFibonacciBinet, getFibonacciFast };
