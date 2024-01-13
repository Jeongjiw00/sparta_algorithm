// 수 조작하기 2
// 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog에 대해 조작을 위해 입력받은 문자열을 return

function solution(log) {
  let result = "";
  for (let i = 0; i < log.length; i++) {
    const n = log[i + 1] - log[i];
    switch (n) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}
