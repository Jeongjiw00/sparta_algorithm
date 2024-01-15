// 문자열의 뒤의 n글자
// my_string의 뒤의 n글자로 이루어진 문자열을 return
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}

function solution2(my_string, n) {
  return my_string.slice(my_string.length - n);
}
