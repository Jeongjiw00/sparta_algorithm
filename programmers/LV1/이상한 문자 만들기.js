// 이상한 문자 만들기
function solution(s) {
  return s
    .split(" ")
    .map((x) =>
      x
        .split("")
        .map((y, index) => (index % 2 == 0 ? y.toUpperCase() : y.toLowerCase()))
        .join("")
    )
    .join(" ");
}
