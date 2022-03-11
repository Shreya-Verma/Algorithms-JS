/**
 * every number after the first two is the sum of the two * preceding ones
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

function fibonacci(limit = 1) {
  if (limit === 1) return 1;

  const sequence = [1, 1];
  let curr = 1;
  let prev = 1;
  for (let i = 2; i < limit; i++) {
    curr = curr + prev;
    prev = curr - prev;
    sequence.push(curr);
  }
  return sequence.toString();
}
//O(n)
console.log(fibonacci(9)); // should print 1, 1, 2, 3, 5, 8, 13,21, 34

//////RECURSIVE
// Write a recursive function called fibonacci
// which accepts a number and returns the nth number in the Fibonacci sequence.
// Assuming Fibonacci starts from  1,1,2,3,5....
function fibonacciRecursive(nthNum) {
  if (nthNum === 1 || nthNum === 2) return 1;
  return fibonacciRecursive(nthNum - 1) + fibonacciRecursive(nthNum - 2);
}

console.log(fibonacciRecursive(4));

//Calculate fibonacci number at specific position using closed form function (Binet's formula).
// Find Fibonacci number between 1-75 at  10th position.
// Assuming Fibonacci starts from  1,1,2,3,5....
const maxPosition = 75;
const minPosition = 5;
function fibonacciClosed(position) {
  if (position < minPosition || position > maxPosition) {
    return "Out of range fibonnaci position";
  }
  if (position === 1 || position === 2) return 1;

  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  return Math.floor(phi ** position / sqrt5 + 0.5);
}

//O(1);
console.log(fibonacciClosed(11));
