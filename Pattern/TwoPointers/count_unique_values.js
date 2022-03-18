// Implement a function called countUniqueValues, 
//  Which accepts a sorted array,
//  and counts the unique values in the array
//  There can be negative numbers in array but it will be
//  always sorted

// SOLUTION: 
let arr = [-1,0,1,1,2];

function countUniqueValues(arr){
    let i = 0;
    for (var j = 1; j <arr.length ; j++ ){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}




console.log(countUniqueValues(arr));