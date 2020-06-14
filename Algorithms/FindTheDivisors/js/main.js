function divisors(integer) {
  arr = []
  let j=0;
  for(let i=2; i<integer;i++){
     if(integer%i==0){
       arr.push(i)
       j++
     }
  }
  if(j<=1){
    return `${integer} is a Primer Number`
  }
  return arr
};

console.log(divisors(16))