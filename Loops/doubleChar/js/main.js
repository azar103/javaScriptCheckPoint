function doubleChar(str) {
  // Your code here
  var arr = str.split('')
  for(let i=0; i<arr.length;i++) {
     arr[i]+=arr[i]
  }

  return arr.join('')
}


console.log(doubleChar("abcd"))