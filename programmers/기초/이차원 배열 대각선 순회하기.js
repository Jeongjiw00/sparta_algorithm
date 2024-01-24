//이차원 배열 대각선 순회하기
//i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return
function solution(board, k) {
  let count = 0;
  let length1 = board.length;
  let length2 = board[0].length;

  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      if (i + j <= k) {
        count += board[i][j];
      }
    }
  }

  return count;
}
