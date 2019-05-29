module.exports = {
    gap: (g,m,n)=>{
        let unswer=[];
    let primeNumbers=[];
    primeNumbers.length=n+1;
    primeNumbers.fill(0,0,n+1)
    for (let i=2; i*i<n+1; i++){
      if (primeNumbers[i]==0) {
        for (let k=i*i; k<n+1; k+=i) {
          primeNumbers[k]=1
        }
      }  
    }
      // let interimGap=0, interimNumber=m;
      while(m<=n+1-g){ 
       if ((primeNumbers[m]==0) && (primeNumbers[m+g]==0)) {
           let isPrimeBetween=false;
           for (let f=m+1; f<=(m+g-1); f++) {
               if (primeNumbers[f]==0){
               isPrimeBetween=true;  
             }
           }
           if (!isPrimeBetween){
           unswer[0]=m; unswer[1]=m+g; 
           return unswer;       
           // break;
           } else {
           m++
         }       
       } else {
          m++;
       }      
      }
      return null;



    }
}
