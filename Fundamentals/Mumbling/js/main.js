function accum(s) {
   let arr =[]
    for(let i=0; i< s.length; i++){
       var t = s[i].toUpperCase()+format(s[i], i) 
       arr.push(t)
    }
    return JSON.stringify(arr.join('-'))
}
function format(str, num){
   let c =''
   for(let i=0; i<num;i++){
      c+=str
   }
   return c.toLowerCase()
}


console.log(accum('ZpglnRxqenU'))



//TEeSssTttt
