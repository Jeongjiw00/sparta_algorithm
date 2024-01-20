// 홀수 vs 짝수
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((num, index) => {
    !(index % 2 === 0) ? (even += num) : (odd += num);
  });

  return odd > even ? odd : even;
}
