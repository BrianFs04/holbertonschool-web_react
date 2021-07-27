import { concatElements, mergeElements } from './5-merge';

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { c: 10, a: 20, t: 30 };

console.log(concatElements(array1, array2));
console.log(mergeElements(obj1, obj2).toObject);
