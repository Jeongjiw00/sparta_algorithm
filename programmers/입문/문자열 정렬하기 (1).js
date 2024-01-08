//** 숫자만 골라 오름차순 정렬한 리스트 */
function solution(my_string) {
  const answer = my_string.replace(/[^0-9]/g, "").split("");
  return answer.map((v) => Number(v)).sort((a, b) => a - b);
}

function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .sort()
    .map((n) => Number(n));
}
