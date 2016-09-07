function createKeys(str) {
  var uniqueCounter = {};
  for(var i = 0;i< str.length;i++) {
    if (uniqueCounter[str[i]] === undefined) {
      uniqueCounter[str[i]] = [];
      uniqueCounter[str[i]].push(i)
    }
    else {
      uniqueCounter[str[i]].push(i)
    }
  }
  delete uniqueCounter[' ']
  return uniqueCounter;
}

console.log(createKeys("Lighthouse in the house"))