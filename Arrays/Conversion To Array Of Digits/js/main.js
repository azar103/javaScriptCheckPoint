function digitize(n) {
  //code here
  let arr = Array.from(String(n), Number).reverse()
  return arr;
  
}

console.log(digitize(12345))