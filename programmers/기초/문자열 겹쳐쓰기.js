// 문자열 겹쳐쓰기
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return

function solution(my_string, overwrite_string, s) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (s <= i && i < s + overwrite_string.length) {
      answer += overwrite_string[i - s];
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "merS123", 7));
console.log(solution("a1a1", "a", 3));
// replace를 쓰면 bbbaaa가 나옴
console.log(solution("aaaaaa", "bbb", 3)); // "aaabbb"
