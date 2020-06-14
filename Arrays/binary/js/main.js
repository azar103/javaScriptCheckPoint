const binaryArrayToNumber = arr => {
  // your code

  var arrConvertedToBinaryString = arr.join('')

  return parseInt(arrConvertedToBinaryString, 2)
};

console.log(binaryArrayToNumber([0,0,1,0]))