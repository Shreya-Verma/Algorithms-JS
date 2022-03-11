// Calculate the factorial of a number
// 3! : 3*2*1 =6
// 0!  = 1

////////////////////////////
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  return total;
}
//Time O(n), space O(1);

console.log(factorial(4));

////////////////RECURSION//////////////////
function factorialRecursion(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(4));
