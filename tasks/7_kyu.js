define(function () {    
  return {
    sequenceSum: function sequenceSum( begin, end, step ){
      if(begin > end){
        return 0
      }
      
      else if(begin === end){ 
        return begin
      }
    
      else{
        return begin + sequenceSum(begin += step, end, step)
      } 
  }
  };
})





