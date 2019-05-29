module.exports = {

  approximationPoint: (value) => {
    return value / (1 + Math.sqrt(1 + value));
  }
  
}

