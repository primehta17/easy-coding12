//check if the number is abundant or not
function checkAbundant(num) {
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        }
    }
     return num<sum? "Abundant": "Not Abundant";
}
console.log(checkAbundant(18));