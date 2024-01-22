//x 사이의 개수
//"x"를 기준으로 문자열을 나누면 ["o", "oo", "o", "", "o", ""]가 됩니다.
// 각각의 길이로 배열을 만들면 [1, 2, 1, 0, 1, 0]입니다. 따라서 [1, 2, 1, 0, 1, 0]을 return
function solution(myString) {
  return myString.split("x").map((a) => a.length);
}
