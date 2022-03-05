//SOLUTION 1:
/**
 *
 * @param {*} num
 * @returns boolean
 */
function isPalindrome(num) {
  // if number is less than 0 or is divisible by 10
  if (num < 0 || num % 10 === 0) return false;

  let result = 0;
  let value = num;

  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return result === value;
}

console.log(isPalindrome(1234321));
