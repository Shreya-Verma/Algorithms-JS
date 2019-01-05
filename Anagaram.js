// check if two strings are Anagrams.
// Assumptions: 
    // Lover case simple words with no special character or space.

// SOLUTION :

let str1 = "Rat";
let str2 = "Tar";

function validAnagarm(str1, str2){
    // additional checks for  empty strings.
    // first check the length of the string
    if(str1.length !== str2.length){
        return false;
    }

    let f1 = {};
    let f2 = {};

    // if the strings are not in lower case,make it in lower case.
    // find out the occurances of individual character in the word
    for (let v of str1.toLowerCase()){
       f1[v] = (f1[v] || 0) + 1;
    }

    // if the strings are not in lower case,make it in lower case.
    // find out the occurances of individual character in the word
    for (let v of str2.toLowerCase()){
        f2[v] = (f2[v] || 0) + 1;
    }

    // compare 
    // 1. if the key in f1 is present in f2
    // 2. compare the frequency of key present in f1 and f2
    for (let key in f1){
        if(!(key in f2)){
            return false;
        }
        if(f1[key] !== f2[key]){
            return false;
        }
    }

    console.log(f1);
    console.log(f2);
    return true;

}


console.log(validAnagarm(str1,str2));