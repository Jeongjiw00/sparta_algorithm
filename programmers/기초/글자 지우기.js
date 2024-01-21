//글자 지우기
function solution(my_string, indices) {
  return [...my_string]
    .map((alpha, index) => (indices.includes(index) ? 0 : alpha))
    .filter((alpha) => alpha !== 0)
    .join("");
}
