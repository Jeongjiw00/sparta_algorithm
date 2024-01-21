//문자열 바꿔서 찾기
function solution(myString, pat) {
  return [...myString]
    .map((a) => (a === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}
