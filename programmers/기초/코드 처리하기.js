// 코드 처리하기
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.
// 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.

function solution(code) {
  let ret = "";
  let mode = 0;

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      mode === 0 ? (mode = 1) : (mode = 0);
    } else {
      if (idx % 2 === 0 && mode === 0) {
        ret += code[idx];
      }
      if (idx % 2 !== 0 && mode === 1) {
        ret += code[idx];
      }
    }
  }

  return ret === "" ? "EMPTY" : ret;
}
