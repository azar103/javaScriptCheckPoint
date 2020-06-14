function solution(number){
  arr = []
  let sum = 0
    for(let i=1; i<number;i++){
      if(i%3==0 || i%5==0){
        arr.push(i)
        console.log(i)
      }
    }

   for(let i=0; i<arr.length;i++){
        sum+=arr[i]
   }
   return sum
}

console.log(solution(10))