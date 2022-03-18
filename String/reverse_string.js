// Write a function called reverse,
// accepts a string and returns a reverso of the string.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// SOLUTION THROUGH RECURSION:
const reverse_string_recursion = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return reverse_string_recursion(str.slice(1)) + str[0];
};

console.log(reverse_string_recursion("hello"));

// SOLUTION THROUGH TWO POINTER:
const reverse_string_two_pointer = (s) => {
  let i = 0;
  let j = s.length - 1;
  let str = s.split("");
  while (i < j) {
    let ch = str[i];
    str[i] = str[j];
    str[j] = ch;
    i++;
    j--;
  }
  return str;
};

console.log(reverse_string_two_pointer("Awesome"));
