define(function () {
  return {
    tripleShiftian: (base,n) => {
      if(n < 3) return base[n];
      else {
        for(let i = 3; i <= n; i++)
          base.push(4 * base[i - 1] - 5 * base[i - 2] + 3 * base[i - 3]);
      
        return base[n];
      }
    }
  };
});
