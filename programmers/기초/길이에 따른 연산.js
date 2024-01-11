// 길이에 따른 연산
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return

function solution(num_list) {
  let result = 0;
  if (num_list.length > 10) {
    for (let num of num_list) {
      result += num;
    }
  } else {
    result++;
    for (let num of num_list) {
      result *= num;
    }
  }

  return result;
}

// reduce()
function solution2(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.length > 10
    ? num_list.reduce(add, 0)
    : num_list.reduce(mult, 1);
}

// 더 간단히
const solution3 = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
