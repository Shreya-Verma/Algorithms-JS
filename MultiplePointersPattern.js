// Creating pointers or values that correspond to and index or position and 
// move towards the end , beginning or middle based on a certain condition .
// sumZero([-4,-3,-2,-1,0,1,2,5])

// Assumption :
    // The array is a sorted Array

let arr = [-4,-3,-2,-1,0,1,2,5];

// the array is sorted.
function sumZero(arr){
    // assign first to zero
    let first = 0;
    // assign last to array -1
    let last = arr.length - 1;
    while(first < last ){
        let sum = arr[first] + arr[last];
        if(sum === 0){
            //if sum is = 0 then return the array
            return [arr[first], arr[last]];
        }else if (sum > 0){
            // decrease the last pointer
            last--;
        }else{
            // increase the first pointer  
            first++;
        }
    }
}

console.log(sumZero(arr));





