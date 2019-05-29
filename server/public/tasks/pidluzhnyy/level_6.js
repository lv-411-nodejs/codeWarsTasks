module.exports = {
    findNb: (m) => {
      var x = 0;
      while (m > 0) {
        x += 1;
        m = m - x ** 3; 
      }
      
      return m ? -1 : x;
    }
}
