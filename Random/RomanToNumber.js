/**
 *
 * @param {*} s
 * @returns
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 */

const romanToInt = function (s) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  if (s.length == 1) return map[s[0]];

  let sum = 0;
  // 0,1,2,3,4,5,6
  // M,C,M,X,C,I,V
  for (let i = 0; i < s.length; i++) {
    let current = map[s[i]];
    //s[0]=M -> map[M] = 1000
    //s[1]=C -> map[C] = 100
    //s[3]=X -> map[X] = 10
    //s[5]=I -> map[I] = 1
    let next = map[s[i + 1]];
    //s[1]=C -> map[C] = 100
    //s[2]=M -> map[M] = 1000;
    //s[4]=C -> map[C] = 100;
    //s[6]=C -> map[V] = 5;

    if (next > current) {
      //false
      //true
      //true
      //true
      sum = sum + (next - current);
      //1000 + (1000-100) = 1900
      //1900 + (100-10) = 1990
      //1900 + (5-1) = 1994
      i++;
      //i = 2
      //i = 4
      //i = 5
    } else {
      //0+1000 = 1000
      sum = sum + current;
    }
    //i = 3
    //i = 5
    //i = 6
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
