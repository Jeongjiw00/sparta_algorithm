// 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return

function solution(s) {
  let array = s.split(" ");
  let num,
    sum = 0;

  for (let i of array) {
    if (i === "Z") {
      sum -= num;
    } else {
      num = Number(i);
      sum += num;
    }
  }

  return sum;
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("-1 -2 -3 Z")); // -3
