const array = [10, 20, 30, 40, 50];

const multiplyBy2 = (x) => x * 2;
const add2 = (x) => x + 2;
const filterCriteria = (x) => x > 30;

/**
 * ************************** IMPLEMENTING ARRAY MAP **************************************
 */
function mapArray(arr, howToModify) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(howToModify(arr[i]));
  }
  return copy;
}

console.log(
  `Original array ${array} , Mapped array ${mapArray(array, multiplyBy2)}`
);

/**
 * ************************** IMPLEMENTING ARRAY FILTER **************************************
 */
function filterArray(arr, howToFilter) {
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (howToFilter(arr[i])) {
      copy.push(arr[i]);
    }
  }
  return copy;
}
console.log(
  `Original array ${array} , Filtered array ${filterArray(
    array,
    filterCriteria
  )}`
);

/**
 * ************************** IMPLEMENTING ARRAY REDUCE **************************************
 */
const init = 1;
const reduceOperation = (a, b) => a + b;
function reduceArray(arr, reduceOperation, aggregator) {
  let i = 0;
  if (!aggregator) {
    aggregator = arr[0];
    i = 1;
  }
  for (i; i < arr.length; i++) {
    aggregator = reduceOperation(aggregator, arr[i]);
  }
  return aggregator;
}

console.log(
  `Original array ${array}, intial value ${init} , Reduced array Sum ${reduceArray(
    array,
    reduceOperation,
    init
  )}`
);

/**
 * ************************** IMPLEMENTING PIPE/CURRYING **************************************
 */
const intialValue = 20;
const runFunctionOnInput = (input, fn) => fn(input);
function pipeThrough(arr, howToReduce, buildingUp) {
  for (let i = 0; i < arr.length; i++) {
    buildingUp = howToReduce(buildingUp, arr[i]);
  }
  return buildingUp;
}

console.log(
  `Original value ${intialValue} , Piped Value ${pipeThrough(
    [multiplyBy2, add2],
    runFunctionOnInput,
    intialValue
  )}`
);

/**
 * ************************** SPLICE AND SLICE **************************************
 */
let newArray = [10, 20, 30, 40, 50, 60, 70, 80];
const spliced = newArray.splice(3, 2, "Hi", "Spliced");
console.log(
  `Value that was removed ${spliced} , Array Value ${newArray} : //Modified the original array`
);

const sliced = newArray.slice(3, 5);
console.log(
  `Value that was copied from array ${sliced} , Array Value ${newArray} : //the original array remains same`
);

/**
 * ************************** IMPLEMENTING ARRAY FLATEN  **************************************
 */

let flatenArray = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]]; // expected output : [1,2,3,4,5,6,7,8,9,10]
console.log("ORIGINAL:", flatenArray.flat(4));

function deepFlat(arr, depth) {
  // one level flat
  return depth > 0
    ? arr.reduce(
        (acc, next) =>
          acc.concat(Array.isArray(next) ? deepFlat(next, depth - 1) : next),
        []
      )
    : arr.slice();
}

Array.prototype.customFlat = function (depth = 1) {
  return deepFlat(this, depth);
};

console.log("CUSTOM:", flatenArray.customFlat()); //depth 1
console.log("CUSTOM:", flatenArray.customFlat(4)); //depth 4
