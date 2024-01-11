// 원하는 문자열 찾기
// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return
// 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}
