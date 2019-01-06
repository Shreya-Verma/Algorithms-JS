
let arr = [34,56,1,2];

function linearSearch(arr,val){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr,12));
