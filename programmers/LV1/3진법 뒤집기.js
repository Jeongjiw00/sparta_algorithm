// 3진법 뒤집기
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
