const litres = (time) =>  {
  return Math.floor(time * 0.5)
}
litres(3);

const startingMark = (bodyHeight) => {
  const diff = (10.67 - 9.45) / (1.83 - 1.52);
  return Math.round((10.67 + diff * bodyHeight - diff * 1.83) * 100) / 100;
}

startingMark(1.52);



