// 크레인 인형뽑기 게임
function solution(board, moves) {
  let cart = [];
  let count = 0;
  moves.map((num) => {
    let index = num - 1;
    for (let doll of board) {
      if (doll[index] !== 0) {
        if (doll[index] === cart[cart.length - 1]) {
          cart.pop();
          count += 2;
        } else {
          cart.push(doll[index]);
        }
        doll[index] = 0;
        break;
      }
    }
  });
  return count;
}
