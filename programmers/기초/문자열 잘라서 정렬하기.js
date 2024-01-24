// 문자열 잘라서 정렬하기
// x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return
function solution(myString) {
  return myString
    .split("x")
    .filter((value) => value !== "")
    .sort();
}
