function factorial(n){
    //your code here
    f=1
    if(n==0){
    return 1
    }
    for(let i=1; i<=n;i++) {
       f*=i
    }
    
    return f
  }