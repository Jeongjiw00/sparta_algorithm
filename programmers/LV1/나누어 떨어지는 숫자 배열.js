// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let array = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  return array.length !== 0 ? array : [-1];
}
