/**
 *
 * @param {*} strs
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  //["flower", "flow", "flight"]
  let longestPrefix = "";
  const firstString = strs[0]; //flower
  for (let i = 0; i < firstString.length; i++) {
    let char = strs[0][i];
    //f
    for (let j = 1; j < strs.length; j++) {
      let charTo = strs[j][i];
      if (char !== charTo) return longestPrefix;
    }
    longestPrefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
