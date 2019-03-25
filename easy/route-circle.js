/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let up = 0;
  let down = 0;
  let left = 0;
  let right = 0;
  let len = moves.length;
  
  for(let i = 0; i < len; i++) {
    if (moves.charAt(i) == "U") {
      up++;
    } else if (moves.charAt(i) == "D") {
      down--;
    } else if (moves.charAt(i) == "L") {
      left--;
    } else if (moves.charAt(i) == "R") {
      right++;
    }
  }

  return (up + down + left + right == 0) ? true : false;
};

console.log(judgeCircle("LL"));