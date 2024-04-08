function secondlargest(arr, k){
  let largest = arr[0]
  for(let i=1; i<k;i++){
    if(arr[i]> largest){
      largest= arr[i]
    }
  }
  largest
  let secondlargestt = arr[0];
  for(let i = 1; i<k;i++){
    if(arr[i]>secondlargestt && arr[i]< largest){
      secondlargestt= arr[i]
    }
  }
   console.log(secondlargestt)
}
secondlargest([1,9,15,45,8,65,77,66,90,1000,100000,1000,98556],13)