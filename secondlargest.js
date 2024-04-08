function ravi(nakul,n){
  nakul.sort((a,b) => a-b);
  second =nakul[n-1]
  for(let i =n-1;i>0;i--){
    if(nakul[i]!= second){
      second = nakul[i];
      break;

    }
    
  }
  return second;
  
}
console.log(ravi([1,54,55,99,99,65,65,85,888,888,999,999,999],13))