// 짝지어 제거하기
function solution(s) {
  // 스택활용해서 효율성 문제 통과
  const array = [];

  for (let i = 0; i < s.length; i++) {
    if (array[array.length - 1] != s[i]) {
      array.push(s[i]);
    } else {
      array.pop();
    }
  }

  return array.length > 0 ? 0 : 1;
}
