const approximationPoint = (value) => {
  return value / (1 + Math.sqrt(1 + value));
}

approximationPoint(1e-15);

