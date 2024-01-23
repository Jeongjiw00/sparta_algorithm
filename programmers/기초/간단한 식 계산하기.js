// /간단한 식 계산하기
function solution(binomial) {
  const cal = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };
  const [a, op, b] = binomial.split(" ");
  return cal[op](Number(a), Number(b));
  // return cal[op](+a, +b);
}
// eval
const solution = eval;
