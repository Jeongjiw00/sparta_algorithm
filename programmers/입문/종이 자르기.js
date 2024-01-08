// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return

function solution(M, N) {
  return M * N - 1;
}

console.log(solution(2, 2)); // 3
console.log(solution(2, 5)); // 9
console.log(solution(1, 1)); // 0
