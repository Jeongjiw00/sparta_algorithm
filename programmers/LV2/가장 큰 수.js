// 가장 큰 수
function solution(numbers) {
  let answer = numbers
    // 숫자들을 문자
    .map((num) => num.toString())
    // 문자로 변환된 숫자를 연결하여 비교정렬
    .sort((a, b) => b + a - (a + b))
    // 문자열 합치기
    .join("");

  // 0으로만 구성되어 있을 경우 '0'만
  return answer[0] === "0" ? "0" : answer;
}
