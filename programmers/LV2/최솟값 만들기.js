// 최솟값 만들기
function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (var i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
