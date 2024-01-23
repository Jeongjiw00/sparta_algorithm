//l로 만들기
//알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return
function solution(myString) {
  return [...myString].map((a) => (a < "l" ? "l" : a)).join("");
}
// 문자는 비교연산자를 이용해 알파벳 순서 비교 가능
function solution2(myString) {
  return [...myString].map((a) => (a.charCodeAt() < 108 ? "l" : a)).join("");
}

// 정규표현식과 replaceAll
function solution3(myString) {
  return myString.replaceAll(/[a-k]/g, "l");
}
