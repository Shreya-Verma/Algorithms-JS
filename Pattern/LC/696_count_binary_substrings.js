function countBinarySubstrings(str) {
  let combinations = [];
  combinations[0] = 1; // lets start the first char belonging to a group, having frequency 1.
  let j = 0;
  //110001111000000
  for (let i = 1; i < str.length; i++) {
    // as we are comparing form 1-- 1 to 0, 2 to 1and so on.
    // hence 0th endex is not compared to any previous values
    //that is why, starting the group at 1
    if (str[i - 1] !== str[i]) {
      combinations[++j] = 1;
    } else {
      combinations[j]++;
    }
  }

  let total = 0;
  for (let i = 1; i < combinations.length; i++) {
    total += Math.min(combinations[i - 1], combinations[i]);
  }
  return total;
}

console.log(countBinarySubstrings("00110011"));
