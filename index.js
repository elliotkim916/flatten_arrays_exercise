/*
    "Flatten"

    Write a function which accepts any number of arrays, which may contain any
    number of arrays, which may contain any number of arrays, ad infinitum, and
    returns a single "flattened" array.
*/

'use strict';

const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const array4 = [7, 8];
const array5 = [1];
const array6 = [1, [1, [1]]];

const reducer = (acc, x) => acc.concat(Array.isArray(x) ? collect(x) : [x]);
// ternary operator first, and then use the concat method
// initially, acc is [], the empty array

const collect = xs => xs.reduce(reducer, []);
// when using the reduce method on xs, were calling reducer to turn the array into a single value, 
// and the initial value is [], an empty array

const flatten = (...args) => collect(args);
// (...args) takes all my arguments and puts them into an array

const result = flatten(array1, array2, array3, array4, array5, array6);
console.log (result);