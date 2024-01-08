// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return

function solution(common) {
  let d1 = common[1] - common[0];
  let d2 = common[2] - common[1];
  let r = common[1] / common[0];

  if (d1 === d2) {
    return common[common.length - 1] + d1;
  } else {
    return common[common.length - 1] * r;
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
