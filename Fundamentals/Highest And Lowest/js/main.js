function highAndLow(numbers){
    newStr = numbers.split(' ');
    convertedArr = [];
    newArr = [];
    for(let i= 0;i<newStr.length;i++) {
        convertedArr[i] = parseInt(newStr[i])     
    }

   let min = Math.min(...convertedArr)
   let max = Math.max(...convertedArr)
   newArr.push(max, min);
   return newArr.join(' ');
  }


  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))