function plural(n) {
  // ...
  if(n==0 ||n>2 || isFloat(n) || n==Infinity ) {
    return true
  }else {
    return false
  }
  
}