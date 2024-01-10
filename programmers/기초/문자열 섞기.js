// 문자열 섞기
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return

function solution(str1, str2) {
  let answer = "";
  let length = str1.length * 2;

  for (let i = 1; i <= length; i++) {
    if (i % 2 === 0) {
      answer += str2[i / 2 - 1];
    } else {
      answer += str1[Math.ceil(i / 2) - 1];
    }
  }

  return answer;
}
