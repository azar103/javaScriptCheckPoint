function getCount(str) {
   let vowelCount = 0;
   for(let i=0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i]=='o' || str[i]=='u'||str[i]=='i'){
        vowelCount++;
    }
   }

   return vowelCount;
}

console.log(getCount('testing'))