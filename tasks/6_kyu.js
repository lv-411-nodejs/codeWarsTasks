define(function () {
  return {
    approximationPoint: function(value){
      return value / (1 + Math.sqrt(1 + value));
    }
  };
})
