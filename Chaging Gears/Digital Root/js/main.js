function digital_root(n) {
  let arr = Array.from(n.toString(), Number)
 let sum =0

 for(let i=0; i< arr.length;i++) {
   sum+=arr[i]
 }
do{
 arr = Array.from(sum.toString(), Number)

  sum =0
 for(let i=0; i< arr.length;i++) {
   sum+=arr[i]
 }
 }while(sum>=10)
 return sum
}