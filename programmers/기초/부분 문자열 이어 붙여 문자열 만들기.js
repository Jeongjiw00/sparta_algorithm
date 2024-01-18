// 부분 문자열 이어 붙여 문자열 만들기
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다
function solution(my_strings, parts) {
  let result = "";
  for (let i = 0; i < my_strings.length; i++) {
    result += my_strings[i]
      .split("")
      .slice(parts[i][0], parts[i][1] + 1)
      .join("");
  }
  return result;
}
