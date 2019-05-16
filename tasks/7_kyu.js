
define(function() {
  return {
    seriesSum: (n) => {
      if(n == 0 || !n) return "0.00";
      
      let sum = 1, next = 4;
      
      for(let i = 1; i < n; i++) {
        sum += 1 / next;
        next += 3;
      }
      
      return sum.toFixed(2).toString();
    }
  }
});
