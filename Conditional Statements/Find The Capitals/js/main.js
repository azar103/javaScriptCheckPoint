var capitals = function (word) {
  // Write your code here
  let arr = [];
  let newWordSplited = word.split('')
  for(let i=0; i< newWordSplited.length; i++) {
        if(newWordSplited[i] === newWordSplited[i].toUpperCase()){
          arr.push(i)
        }
  }

  return arr
};

console.log(capitals('CodEWaRs'))