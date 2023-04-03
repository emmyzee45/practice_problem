const reverse = (num) => {
  let result = 0;
  if (num < 0) return false;
  for (let i = num; i >= 1; i = Math.floor(i / 10))
    result = result * 10 + (i % 10);
  return result === num;
};
