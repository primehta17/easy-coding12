//write a function to check if an array is balanced

function isArrayBalanced(arr) {
    let sum=0;
    for(let i=0;i<Math.floor(arr.length/2);i++){
       sum+=arr[i];
    }
    for(let i=Math.floor(arr.length-1);i>=2;i--){
        console.log(sum);
        if(sum===arr[i]){
            return "Balanced";
        }
        else{
            return "Not Balanced";
        }
    }
    
}
console.log(isArrayBalanced([1,2,3]));