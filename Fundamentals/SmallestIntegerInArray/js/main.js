class SmallestIntegerFinder {
     findSmallestInt(args) {
        let min = args[0];
            for(let i=0 ; i< args.length;i++){
                if(args[i] <= min) {
                    min = args[i]
                }
              }        
        return min;
    }
  }

  const test = new SmallestIntegerFinder();

  console.log(test.findSmallestInt([1,56,232,12,8]))