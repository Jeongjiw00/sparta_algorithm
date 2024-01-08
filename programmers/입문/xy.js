function solution(keyinput, board) {
  let result = [0, 0];
  let max_x = (board[0] - 1) / 2;
  let max_y = (board[1] - 1) / 2;

  function check_x() {
    if (result[0] >= max_x) {
      result[0] = max_x;
    } else if (result[0] <= -max_x) {
      result[0] = -max_x;
    }
  }
  function check_y() {
    if (result[1] >= max_y) {
      result[1] = max_y;
    } else if (result[1] <= -max_y) {
      result[1] = -max_y;
    }
  }
  for (let i in keyinput) {
    if (keyinput[i] === "up") {
      result[1] += 1;
      check_y();
    } else if (keyinput[i] === "down") {
      result[1] -= 1;
      check_y();
    } else if (keyinput[i] === "left") {
      result[0] -= 1;
      check_x();
    } else if (keyinput[i] === "right") {
      result[0] += 1;
      check_x();
    }
  }

  return result;
}
console.log(solution(["down", "down", "up", "up", "up"], [3, 3]));
console.log(solution(["left", "left", "left", "right"], [3, 3]));
