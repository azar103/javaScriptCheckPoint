function descendingOrder(n){
    arrayOfDigits = Array.from(n.toString()).map(number => parseInt(number))

    return JSON.stringify(Number(arrayOfDigits.sort((a, b) => b-a).join('')))
  }

  console.log(descendingOrder(145263))