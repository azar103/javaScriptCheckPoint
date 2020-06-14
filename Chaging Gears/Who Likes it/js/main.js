function spinWords(str){
  //TODO Have fun :)
  words = str.split(' ')
  arr= []
  for(let i=0; i<words.length;i++){
    arr.push(words[i])
    if(words[i].length>=5){
      arr.push(words[i].split('').reverse().join(''))
      arr.splice(i, 1)
    }
  }

  return arr.join(' ')

}

console.log(spinWords("You are almost to the last test"))