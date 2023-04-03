const threeSum = (num) => {
  let [solution, left, right] = [[], 0, num.length - 1];
  if (num.length < 3) return solution;
  num.sort((a, b) => {
    return a - b;
  });

  for (let [index, number] of num.entries()) {
    if (number > 0) return solution;
    left = index + 1;
    let temp = 0;

    while (left < right) {
      temp = number + num[left] + num[right];
      if (temp == 0) {
        solution.push([number, num[left], num[right]]);
        left++;
        right--;

        while (left < right && num[left] === num[left + 1]) {
          left++;
        }
        while (left < right && num[right] === num[right - 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
