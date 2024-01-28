// 자릿수 더하기
function solution(n) {
  return String(n)
    .split("")
    .reduce((sum, cur) => sum + Number(cur), 0);
}
