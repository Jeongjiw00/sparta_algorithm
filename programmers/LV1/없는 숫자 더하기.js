// 없는 숫자 더하기
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
