// Write a function called reverse,
// accepts a string and returns a reverso of the string.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// SOLUTION THROUGH RECURSION:

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Awesome"));
