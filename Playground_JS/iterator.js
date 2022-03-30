/**
 * for..in and for..of
 */
const employee = {
  name: "Pooja",
  company: "Xebia",
  age: 25,
};

const array = [60, 23, 56, 78, "Shreya", "Ajit", function sayHello() {}, 89];

// This will work and return the prop name of the objects  and the index values in a array
for (let i in employee) {
  console.log(i);
}
for (let i in array) {
  console.log(i);
}

// for for.. of to work the object needs to have a special property of Symbol.iterator.
// for (let item of employee) {
//   console.log(item);
// }
for (let item of array) {
  console.log(item);
}

/////////Iterators under the hood
function createFlow(array) {
  let i = 0;
  const inner = {
    next: function () {
      if (i < array.length) {
        let element = array[i];
        i++;
        return { value: element, done: false };
      } else {
        return { done: true };
      }
    },
  };
  return inner;
}

const element = createFlow([40, 50, 60, 70]);
console.log(element.next().value);
console.log(element.next().value);
console.log(element.next().value);
console.log(element.next().value);
console.log(element.next().value);
console.log(element.next().value);

/**
 *
 * Create an iterator with a next method that returns an array with two elements
 * (where the first element is the index and the second is the value at that index) when .next is called.
 */

function indexIterator(arr) {
  let i = 0;
  const inner = {
    next: function () {
      let element = arr[i];
      let index = i;
      i++;
      return [index, element];
    },
  };
  return inner;
}

// Uncomment the lines below to test your work
const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
// Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  let stringvalue = this.str.split(" ");
  let i = 0;
  const inner = {
    next: function () {
      if (i < stringvalue.length) {
        let element = stringvalue[i];
        i++;
        return { done: false, value: element };
      } else {
        return { done: true };
      }
    },
  };
  return inner;
};

// Uncomment the lines below to test your work
const helloWorld = new Words("Hello World");
for (let word of helloWorld) {
  console.log(word);
} // -> should log 'Hello' and 'World'
