// 세로 읽기
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return
function solution(my_string, m, c) {
  return [...my_string].filter((alpha, index) => index % m === c - 1).join("");
}
