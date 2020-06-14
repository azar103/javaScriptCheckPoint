function getMiddle(string) {
   if(string.length % 2 != 0) {
        return string[Math.floor(string.length/2)];
   }else {
       return `${string[(string.length)/2 - 1]}${string[(string.length)/2]}`;
   }
}

