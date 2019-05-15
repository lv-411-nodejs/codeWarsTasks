const bouncingBall = (h,  bounce,  window) => {
  if(h > 0 && bounce > 0 && bounce < 1) {
    let count = 0;
    while(h > window) {
      h *= bounce;
      count += 2;
    }
    return count - 1;
  }
  return -1;
}
