// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다.
// 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return

// 소인수분해 기본방식
function solution(n) {
  let answer = new Set();

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.add(i);
    }
  }

  return [...answer];
}

// // 이 방식은 반복을 계속해서 별로
// function solution(n) {
//   let all = [];
//   let answer = [];
//   let d = false;

//   for (let i = 2; i <= n; i++) {
//     if (n % i === 0) all.push(i);
//   }

//   for (let j of all) {
//     for (let k = 2; k < j; k++) {
//       if (j % k === 0) {
//         d = true;
//       }
//     }

//     if (d === false) {
//       answer.push(j);
//     } else {
//       d = false;
//       continue;
//     }
//   }
//   return answer;
// }

// console.log(solution(12)); // [2, 3]
// console.log(solution(17)); // [17]
console.log(solution(420)); // 	[2, 3, 5, 7]
