// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return

function solution(num, total) {
  let a;
  // num = 3;
  // total = a + a + 1 + a + 2;
  // num = 4;
  // total = a + a + 1 + a + 2 + a + 3;
  // total = num * a + (1 + ... + (num - 1));
  // 결론 => a = (total - (1 + ... + (num - 1))) / num

  // (1 + ... + (num - 1))
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  // a
  a = (total - sum) / num;
  // array
  let array = [];
  for (let j = a; j < a + num; j++) {
    array.push(j);
  }

  return array;
}

console.log(solution(3, 12)); // 	[3, 4, 5]
console.log(solution(5, 15)); // 	[1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // 	[-1, 0, 1, 2, 3]
