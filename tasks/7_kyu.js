define(function () {    
    return {
        whereIsHe: function whereIsHe( p, bef, aft ){
		  let posNumb=0;
		  for (let i=1; i<=p; i++){
		    if (i-1<=aft && p-i>=bef) {
		      posNumb++;
		    }
		  }
		  return posNumb;  
		}
    };
})

