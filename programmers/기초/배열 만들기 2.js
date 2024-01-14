// 배열 만들기 2
// l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return
function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    // every 함수 사용하려고 문자열로 변경
    let arr = String(i);
    if (![...arr].every((x) => x === "5" || x === "0")) continue;
    answer.push(i);
  }
  return answer.length ? answer : [-1];
}
