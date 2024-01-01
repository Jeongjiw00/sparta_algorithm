//** 대문자는 소문자로 소문자는 대문자로 변환 */
function isUpper(strValue) {
  if (strValue === strValue.toUpperCase()) {
    return true;
  }
  return false;
}

function solution(my_string) {
  let answer = [...my_string]
    .map((v) => {
      if (isUpper(v)) {
        return v.toLowerCase();
      } else {
        return v.toUpperCase();
      }
    })
    .join("");
  return answer;
}

function solution(my_string) {
  let answer = [...my_string]
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
  return answer;
}

function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}
