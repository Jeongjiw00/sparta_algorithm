// 이진 변환 반복하기
function solution(s) {
  let count = 0;
  let zero_count = 0;

  while (s !== "1") {
    let str = "";

    for (let i = 0; i < s.length; i++) {
      if (s[i] == "0") {
        zero_count += 1;
      } else {
        str += s[i];
      }
    }

    count += 1;

    s = str.length.toString(2);
  }

  return [count, zero_count];
}
