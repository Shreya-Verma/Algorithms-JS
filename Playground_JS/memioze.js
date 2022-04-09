/**
 *
 * CUSTOM MEMOIZE
 *
 */

const memoize = (func) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
};

let count = 0;
const add = (a) => {
  console.log("called: ", ++count);
  return a + 10;
};

let memoizedAdd = memoize(add);
console.log(memoizedAdd(10));
console.log(memoizedAdd(10));
console.log(memoizedAdd(10));
console.log(memoizedAdd(10));
console.log(memoizedAdd(10));
