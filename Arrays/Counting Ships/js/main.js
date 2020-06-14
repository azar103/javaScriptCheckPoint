function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let nb = 0;
  for(let i=0;i < arrayOfSheep.length;i++) {
    if(arrayOfSheep[i] == true) {
         nb++;
    }
  }

  return nb;
}
var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];
console.log(countSheeps(array1))