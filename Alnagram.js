const alnagram = (nums) => {
  let cache = {};
  for (let str of nums) {
    let key = str.split("").sort().join("");
    !cache[key] ? (cache[key] = [str]) : cache[key].push(str);
  }
  return Object.values(cache);
};

const alnagramsPrim = (strs) => {
  let cache = {};
  for (let str of strs) {
    const primeNumbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101,
    ];
    let key = str
      .split("")
      .reduce((total, char) => total * primeNumbers[char.charCodeAt() - 97], 1);
    !cache[key] ? (cache[key] = [str]) : cache[key].push(str);
  }
  console.log(cache);
  return Object.values(cache);
};

console.log(alnagramsPrim(["tea", "ate", "tan", "nat", "eat", "bat"]));
