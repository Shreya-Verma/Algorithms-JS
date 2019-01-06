//BEST FOR CONSICUTIVE ELEMENTS IN A STRING/ARRAY

// Write a function called maxSubArraySum which accepts an array of integers and a number n,
// the function should calculate the maximum sum of n 
// consicutive elements in the array

// Assumptions : 
    // no negative number 
    // non sorted array

// SLIDING WINDOW PATTERN


//SOUTION 1:  O(n * n)
let arr = [1,2,3,4,8,1,5];

function maxSubArraySum1(arr, n){

    let max = -Infinity;

    for(let i=0; i < arr.length - n + 1 ; i++) {
        temp = 0;
        for(let j=0; j < n ; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
    
}

// SOULTION 2 : O(n)
function maxSubArraySum2(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    // Find out the sum of fist n numbers
    for(let i= 0; i< n;i++){
        maxSum += arr[i];
    }
    // store it in local temp variable
    tempSum = maxSum;

    // Start from n
    for( let i = n; i < arr.length ;i++){
        // Add the  number at current index
        // Subtract the number at the index of current index - the total n
        tempSum = tempSum + arr[i] - arr[i - n];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;

}




console.log(maxSubArraySum1(arr,2));
console.log(maxSubArraySum2(arr,2));
