var hammingDistance = function(x, y) {
  let z = x ^ y;
  let num = 1;
  let result = 0;
  while(num) {
    if (num & z) {
        result++;
    }
    console.log(num);
    num = num << 1;
  }
  return result;
};

console.log(hammingDistance(5,6));