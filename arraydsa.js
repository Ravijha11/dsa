
let arr = [1,2,3,4,5,6,50,9,8,15,14,12];

// console.log(arr.sort((a,b) => a-b))
// console.log(arr[arr.length-1])
function ravi(arr,n) {
  let largest =  arr[0];
  for(let i=0;i<n;i++){


    if(largest<arr[i]){




     largest= arr[i]
  }


  
  }
  return largest
  
  
}
console.log(ravi([454,55,8545,545,8545,85451],6))




