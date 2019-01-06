// Calculate the factorial of a number
// factorial(3) : 3*2*1 =6

//ITERATIVELY
function factorial(num){
    if (num === 1){
        return 1;
    }
    let total = 1;
    for(let i= num ; i > 1 ; i--){
       total *= i; 
    }
    return total;
}

// RECURSION
function recFactorial(num){
    if(num === 1){
        return 1;
    }
    return num * recFactorial(num-1);
}

console.log(factorial(3));
console.log(recFactorial(3));