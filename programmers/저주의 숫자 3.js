// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
// n을 3x 마을에서 사용하는 숫자로 바꿔 return
// 1 ->	1,	6 ->	8
// 2 ->	2,	7 ->	10
// 3 ->	4,	8 ->	11
// 4 ->	5,	9 ->	14
// 5 ->	7,	10 ->	16

// console.log("30".includes("3")); //true

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count++;
    while (count % 3 === 0 || String(count).includes(3)) {
      count++;
    }
  }
  return count;
}

console.log(solution(15)); //25
console.log(solution(40)); //76
