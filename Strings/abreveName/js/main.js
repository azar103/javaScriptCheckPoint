function abbrevName(name){

     // code away
     arr= name.split(' ')
   newArr = []
   newArr.push(arr[0][0])
   newArr.push(arr[1][0])
   let newWord = newArr.join('.')
   
   return newWord.toUpperCase()
 }

 console.log(abbrevName('Sam Harris'))