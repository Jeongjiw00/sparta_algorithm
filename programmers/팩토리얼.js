// i! ≤ n 를 만족하는 가장 큰 정수 i를 return
let result = 1;

function solution(n) {
  for (let i = 1; i <= n; i++) {
    result = result * i;
    if (result > n) {
      return i - 1;
    } else if (result === n) return i;
  }
}

console.log(solution(7) === 3);
console.log(solution(3628800) === 10);
console.log(solution(1) === 1);
