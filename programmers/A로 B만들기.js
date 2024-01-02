// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return

function solution(before, after) {
  // split - 문자열을 배열로 분할
  // join - 배열을 문자열로 결합
  if (before.split("").reverse().join("") === after) return 1;
  else return 0;
}

// 내림차순 for문으로 반전
function solution2(before, after) {
  let newString = "";

  for (let i = before.length - 1; i >= 0; i--) {
    newString += before[i];
  }

  if (newString === after) return 1;
  else return 0;
}

console.log(solution("olleh", "hello"));
console.log(solution2("olleh", "hello"));
