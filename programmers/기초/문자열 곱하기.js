// 문자열 곱하기
// my_string을 k번 반복한 문자열을 return

function solution(my_string, k) {
  let answer = "";
  let count = 0;

  while (count !== k) {
    answer += my_string;
    count++;
  }
  return answer;
}

// 화살표함수와 repeat이용
const solution2 = (my_string, k) => my_string.repeat(k);
