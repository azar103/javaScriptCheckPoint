function findShort(s){
    let arrSplited = s.split(' ')
    console.log(arrSplited)
    arrOfLength = []
    for(let i=0; i< arrSplited.length;i++) {
        arrOfLength[i] = arrSplited[i].length
    }
    let min = Math.min(...arrOfLength)
    return min;
}

console.log(findShort('turns out random test cases are easier than writing out basic ones'));