function sumTwoSmallestNumbers(numbers) {  
  let firestFilteredArray = numbers.filter((n) => n>0 && Number.isInteger(n))
  let min = Math.min(...numbers)
  console.log(min)
  let arr = []  
  arr.push(min)
  const filterArr = firestFilteredArray.filter((n) => n!== min)
  let secondMin = filterArr.sort((a, b) => a-b)[0]
  console.log(secondMin)  

arr.push(secondMin)
let sum = arr[0]+arr[1]
return sum
}


console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))