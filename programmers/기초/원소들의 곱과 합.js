// 원소들의 곱과 합
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return

function solution(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.reduce(mult, 1) < num_list.reduce(add, 0) ** 2 ? 1 : 0;
}
