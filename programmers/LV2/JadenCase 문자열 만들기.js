// JadenCase 문자열 만들기
function solution(s) {
  return s
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");
}
