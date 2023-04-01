const alnagram = (nums) => {
  let cache = {};
  for (let str of nums) {
    let key = str.split("").sort().join("");
    !cache[key] ? (cache[key] = [str]) : cache[key].push(str);
  }
  return Object.values(cache);
};

console.log(alnagram(["tea", "ate", "tan", "nat", "eat", "bat"]));
