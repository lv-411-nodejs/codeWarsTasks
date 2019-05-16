define(function () {
  return {
    productFibonacci: prod => {
      let a = 0, b = 1, c = 1;
      while((a * b) !== prod) {
        if(a * b > prod) return [a, b, false];
        c = a + b;
        a = b;
        b = c;
      }
      return [a, b, true]
    }
  };
});
