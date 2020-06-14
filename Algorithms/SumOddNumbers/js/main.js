// return masked string
function rowSumOddNumbers(n) {
  // TODO
  let init = 1;
  let sum =0;

    let i= 0;
    //for loop to detect the first number of the n range
    for(let i=0; i<n;i++){
      for(let j=0; j<i;j++){
        init+=2
      }
    }
    //for loop t sum the number of the n range
    for(let i=0; i<n ; i++) {
      sum+=init
      init+=2
    }
  return sum
}

console.log(rowSumOddNumbers(4))

//1 2 3 5 7 9