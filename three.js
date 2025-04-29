//write a function to find the pair of elements in that have the minimal difference
function findMinDiffPair(arr) {
  let sorted=arr.sort();
let min=0,diff=0;
  for(let i=0;i<sorted.length;i++){
    diff=sorted[i]-sorted[i-1]; 
    if(min<diff){
        min=diff;
    }
  }
  return diff;

}
console.log(findMinDiffPair([10, 20, 30, 40]))