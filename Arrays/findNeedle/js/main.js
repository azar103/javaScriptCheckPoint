function findNeedle(haystack) {
  // your code here
  let index = haystack.indexOf('needle')
  if(haystack.indexOf('needle') != -1){
    return "found the needle at position "+index
  }
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))