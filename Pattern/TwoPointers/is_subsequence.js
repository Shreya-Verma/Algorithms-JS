// What is subsequence and subString?
//     Subsequence: a sequence that appears in the same relative order, but not necessarily contiguous.
//     SubString: a contiguous sequence of symbols that appears in the same relative order as the original string.

function is_Subsequence(s, t) {
  if (s.length > t.length) return false;
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
    if (j === s.length) return true;
  }
  return false;
}

console.log(is_Subsequence("abc", "aassssayubuic"));
