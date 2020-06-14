function DNAStrand(dna){
    let newArr = []
    for(let i=0; i<dna.length;i++) {
        if(dna[i] === 'A') {
            newArr.push('T')
        } else if(dna[i] === 'T') {
            newArr.push('A')
        }else if(dna[i] === 'C') {
            newArr.push('G')
        }else{
            newArr.push('C')
        }
    }

    return newArr.join('')
  }

  console.log(DNAStrand('ATTGC'));