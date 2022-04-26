/**
 * 
 * A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

Return the minimum number of flips to make s monotone increasing.
 * 
 * 
 */

function flipStringToMonoTone(str) {
  //00000
  //11111
  //01101100
  let oneCounter = 0;
  let flip = 0;
  for (let char of str) {
    //01101100
    if (char === "1") oneCounter++; //1/2//3/4
    else flip++; //1//1/2/3

    flip = Math.min(oneCounter, flip); //0,1/1,0/2,0/2,1/3,1/4,1/4,2/4,3
    //0/0/0/1/1//1/2/3
  }
  return flip;
}

console.log(flipStringToMonoTone("001111101"));
