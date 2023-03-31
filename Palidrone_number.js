const Palidrone = (num) => {
  if (num < 0) return false;
  let reversed = 0;
  for (let i = num; i >= 1; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + (i % 10);
  }
  return reversed === num;
};
