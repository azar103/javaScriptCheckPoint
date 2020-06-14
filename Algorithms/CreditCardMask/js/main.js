// return masked string
function maskify(cc) {
   let arr = cc.split('')
   if(arr.length<4){
     return arr.join('')
   }else {
    for(let i=0; i< arr.length-4; i++) {
      arr[i]="#"
    }
    return arr.join('')
   }
  
}


console.log(maskify('42'))