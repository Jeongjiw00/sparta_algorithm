function solution(n) {
  for (let i = 1; i <= n / 2; i++) {
    if (n / i === i) {
      return 1;
    }
  }
  return 2;
}

console.log(solution(144));
console.log(solution(976));

// function solution(n) {
//     return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2
// }