// check if two strings are Anagrams.
// Assumptions: 
    // Lower case simple words with no special character or space.

// SOLUTION :

let str1 = "Rat";
let str2 = "Tar";

// Frequency counter Pattern .
function validAnagarm1(str1, str2){
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




// ---------> ALTERNATE Solution : Lookup Object


function validAnagarm2(str1, str2){
    // additional checks for  empty strings.
    // first check the length of the string
    if(str1.length !== str2.length){
        return false;
    }

    let lookup = {};
   
    // if the strings are not in lower case,make it in lower case.
    // find out the occurances of individual character in the word
    // create a lookup
    for (let v of str1.toLowerCase()){
        lookup[v] = (lookup[v] || 0) + 1;
    }

    // compare 
    // 1. loop over string 2.
    // 2. get the invidual char and lower case.
    // 3. compare the char from string two in look up 
    // 4. subtract one from lookup when string 2 char matches the lookup.
    for (let i =0; i<str2.length; i++){
       let char = str2[i].toLowerCase();
       if(!(lookup[char])){
           return false;
       }else{
           lookup[char] = lookup[char] - 1;
       }
    }
    return true;

}




console.log(validAnagarm2(str1,str2));
