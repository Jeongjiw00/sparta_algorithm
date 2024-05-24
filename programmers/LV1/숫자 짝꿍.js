// 숫자 짝꿍
function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
  for (let i = 0; i < 10; i++) {
    const a = X.filter((a) => Number(a) === i).length;
    const b = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(a, b));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  // 내림차순으로 정렬해 반환하면 최댓값
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
