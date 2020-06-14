function repeatStr (n, s) {
    let rs = '';
    for(let i=0; i<n;i++){
         rs+=s;
    }
    return rs;
  }

  console.log(repeatStr(4, 'Hello'))