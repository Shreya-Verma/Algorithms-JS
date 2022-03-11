// Write a program to do binary search
// Works in case of sorted array

let arr = [1,2,3,4,5,6,7,8,9,10];
function binarySearch(arr,elem) {
    if(arr.length === 0){
        return 0;
    }
    let first = 0;
    let last = arr.length -1;
    let middle = Math.floor((first + last)/2);
    
    while (arr[middle] !== elem && first <= last){
        if(elem < arr[middle]){
            last = middle - 1;
        }else{
            first = middle + 1;
        }
        middle = Math.floor((first + last)/2);
    }
    if(arr[middle] === elem){
        return middle;
    }else{
        return -1;
    }
    
}

console.log(binarySearch(arr,3));
