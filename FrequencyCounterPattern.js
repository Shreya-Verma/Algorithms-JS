// Write a funtion called frequency, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value
// squared in the second array. The frequency of values must be SyncManager.apply
// frequency([1,2,3], [9,1,4]) : True
// frequency([1,2,3], [1,9]) : false
// frequency([1,2,1], [4,4,1]) : false



// SOULTION

// function frequency(arr1 , arr2) {
//     if(arr1.length !== arr2.length){
//         return false;
//     }    
//     for(let i= 0; i<arr1.length ; i++) {
//         // Here index of is kind of a loop over the array.
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex,1);
//     }
//     return true;
// }


// IMPORVED SOULTION :

let arr1 = [1,2,3];
let arr2 = [1,4,9];

function frequency(arr1,arr2) {   
    //Check the lenghts of the array.
    if(arr1.length !== arr2.length){
        return false;
    }

    let fc1 = {};
    let fc2 = {}; 
    
    // get individual value of the array and its frequency in object 
    for(let v of arr1){
        fc1[v] = (fc1[v] || 0) + 1;       
    }
    for(let v of arr2) {
        fc2[v] = (fc2[v] || 0) + 1;
    }

    //loop over the objects. comparing the key fresnet in second array
    // also comparing the frequency 
    for (let key in fc1){
        if(!(key ** 2 in fc2)){
            return false;
        }
        if(fc2[key ** 2] !== fc1[key]){
            return false;
        }
    }

    return true;
}

console.log(frequency(arr1,arr2));




