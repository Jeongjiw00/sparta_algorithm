//문자열이 몇 번 등장하는지 세기
function solution(myString, pat) {
  let result = 0;
  for (let i = myString.indexOf(pat); i < myString.length; i++) {
    if (myString.slice(i, pat.length + i) === pat) result++;
  }
  return result;
}
