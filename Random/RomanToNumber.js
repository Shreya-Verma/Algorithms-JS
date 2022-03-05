const romanToInt = function (s) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  if (s.length == 1) return map[s[0]];

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let current = map[s[i]];
    let next = map[s[i + 1]];

    if (next > current) {
      sum = sum + (next - current);
      i++;
    } else {
      sum = sum + current;
    }
  }
  return sum;
};

console.log(romanToInt("LVIII"));
