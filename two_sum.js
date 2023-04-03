const TwoSum = (nums, target) => {
  let storage = {};
  for ([index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

console.log(TwoSum([2, 7, 9, 11, 15], 9));
