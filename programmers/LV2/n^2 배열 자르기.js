// n^2 배열 자르기
function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    const m = parseInt(i / n);
    const l = i % n;
    answer.push(Math.max(m, l) + 1);
  }

  return answer;
}

// 간단한 방법
function solution2(n, left, right) {
  let answer = [];

  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }

  return answer;
}
