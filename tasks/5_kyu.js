// fedyna stas
function artificialRain(garden) {
  let fromEndCount = 1;
  let fromBeginCount = 1;
  let twoWaysCount = 1;
  
  //From END to BEGIN
  for(let r = garden.length-1; r != 0; r--){ 
    if(garden[r] >= garden[r-1]){ 
      fromEndCount++
    }
    else break;
  }
    
    // From BEGIN to END
    for(let l = 0; l <= garden.length; l++){
      if(garden[l] >= garden[l+1]){  
        fromBeginCount++
      }
      else break;
    }

    // Two ways
    for(let t = 1; t <= garden.length-1; t++){ 

      if(garden[t] >= garden[t-1] && garden[t] >= garden[t+1]){ 
        //check move to different ways
        twoWaysCount + 2
      }
      
      else if(garden[t] >= garden[t-1] || garden[t] >= garden[t+1]){ 
        //check move to one way (right or left)
        twoWaysCount + 1;
      }
      else{ continue }

    }
    let result = Math.max(fromEndCount,fromBeginCount,twoWaysCount)
}
