function XO(str) {
    let numberOfO = 0;
    let numberOfX = 0;
    for(let i=0; i< str.length; i++) {
        if(str[i] === 'O' || str[i] === 'o') {
            numberOfO++;
        } 
        if(str[i] === 'X' || str[i] === 'x') {
            numberOfX++;
        }
    }
    if(numberOfO === numberOfX) {
        return true
    }else {
        return false
    }
}

console.log(XO('xooxx'))