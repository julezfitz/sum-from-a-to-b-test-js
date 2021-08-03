function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN < toN) {
    return (fromN + sum((fromN + 1), toN));
  }
    return fromN;
  };


module.exports = sum;
console.log(sum(1, 4)); //10
console.log(sum(2, 4)); //9
console.log(sum(13, 14)); //27
console.log(sum(3, 7)); //27

