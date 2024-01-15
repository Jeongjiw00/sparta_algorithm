// 부분 문자열
// str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}
