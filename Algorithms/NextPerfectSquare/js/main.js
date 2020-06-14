function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(sq%Math.sqrt(sq) !== 0) return -1
    let ns =Math.floor(Math.sqrt(sq)) +1
    return ns;
  }