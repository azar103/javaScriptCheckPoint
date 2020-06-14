function squareDigits(num){
    let arrayOfNumbers = Array.from(num.toString()).map(number=>parseInt(number)*parseInt(number))

    return arrayOfNumbers.join('');
    
  }

  console.log(squareDigits(9119))