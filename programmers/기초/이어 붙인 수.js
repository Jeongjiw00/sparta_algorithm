// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return
function solution(num_list) {
  let odd = "";
  let even = "";

  for (let num of num_list) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));
