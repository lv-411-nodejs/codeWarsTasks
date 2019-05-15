// Heads and Legs
const animals = (heads, legs) => {
  const cows = (legs - heads * 2) / 2 ;
  const chickens = heads - cows;
  if( cows > heads || (cows ^ 0) !== cows || chickens > heads || (chickens ^ 0) !== chickens ) return "No solutions";
  else return [chickens, cows];
}

// Short Long Short
const solution = (a , b) => a.length > b.length ? b + a + b : a + b + a;
