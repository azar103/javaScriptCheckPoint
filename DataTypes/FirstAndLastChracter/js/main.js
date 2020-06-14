function removeChar(str){
  //You got this!
  var arr = str.split('')
  arr.pop()
  arr.shift()
  return arr.join('')
 };
 
 
 console.log(removeChar('eloquent'))
 