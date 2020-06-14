function disemvowel(str) {
    const newStr = str.split('');
    console.log(`array splited: ${JSON.stringify(newStr)})`)
    console.log(`length of array ${newStr.length}`)
      for(let i=newStr.length-1; i >= 0; i--) {
          console.log(newStr)
          console.log(newStr[i])
          if(newStr[i] == 'a' || newStr[i]=='A' || newStr[i] == 'e' 
          || newStr[i] == 'E' || newStr[i] == 'o' || newStr[i] == 'O'
          || newStr[i] == 'i' || newStr[i] == 'I'
          || newStr[i] == 'u' || newStr[i] == 'U')
          {
            
              newStr.splice(i, 1);
              console.log(newStr)
          } 
          
  
      }
  
      return newStr.join('')  
  }

  console.log(disemvowel('Wht are your,  commnenst?'));