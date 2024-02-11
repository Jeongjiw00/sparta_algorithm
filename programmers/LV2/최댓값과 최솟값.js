// 최댓값과 최솟값
function solution(s) {
  const array = s.split(" ");

  return Math.min(...array) + " " + Math.max(...array);
}
