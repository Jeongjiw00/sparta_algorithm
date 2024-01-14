// 배열 만들기 1
// 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return

function solution(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      result.push(i);
    }
  }
  return result;
}
