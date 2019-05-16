function artificialRain(garden) {
  
  const answers = [];
  
  const checkLeft = (position) => {
    if(position > 0) {
      let sum = 0;
      for (let i = position; i >= 0; i--) {
        if(garden[i-1] <= garden[i]){
          sum++
        } else {
          break;
        }
      }
      return sum;
     
    } else {
      return 0;
    }
  }
   
  const checkRight = (position) => {
    if(position > 0) {
      let sum = 0;
      for (let i = position, max = garden.length; i < max; i++) {
        if(garden[i+1] <= garden[i]){
          sum++
        } else {
          break;
        }
      }
      return sum;
    } else {
      return 0;
    }
  }
  
  const checkPosition = (position) => {
    const leftSum = checkLeft(position);
    const rightSum = checkRight(position)
    answers.push(1 + leftSum + rightSum); 
  }

  for(let i = 0, max = garden.length; i < max; i++) {
      checkPosition(i);    
  }

  return Math.max(...answers)
}

artificialRain([4,5,6,10]);

