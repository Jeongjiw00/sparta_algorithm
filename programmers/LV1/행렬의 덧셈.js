// 행렬의 덧셈
function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
