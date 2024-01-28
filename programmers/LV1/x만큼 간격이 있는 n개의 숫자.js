// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(x * (i + 1));
  }
  return array;
}
