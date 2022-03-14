// Write a function to count the characters in a String.
// Dummy Output :
// String "hello" :   {h:1, e:1, l:2, o:1}
// Assumptions :
// 1. No Case sensitive, consider H and h as one.
// 2. Don't count spaces and special characters.

// SOLUTION:
function countChar(str) {
  // create an object to return
  let result = {};
  // Loop over the String
  for (var char of str) {
    // Convert to lower case
    char = char.toLowerCase();
    // test for valid letters
    if (/[a-z0-9]/.test(char)) {
      // char present inclement with 1, else assign 1
      result[char] = ++result[char] || 1;
    }
  }
  // Finally return
  return result;
}

console.log(countChar("Hellow how are u????????s"));
