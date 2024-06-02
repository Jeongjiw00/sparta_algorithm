// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  let min = 0;
  let max = 0;
  for (let num of lottos) {
    for (let win of win_nums) {
      if (num === win) min += 1;
    }
  }
  max = min + lottos.filter((v) => v === 0).length;
  return [max === 0 ? 6 : 7 - max, min === 0 ? 6 : 7 - min];
}

function solution2(lottos, win_nums) {
  let answer = [];

  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;

  const zeros = lottos.filter((lotto) => lotto === 0).length;
  console.log(correct, zeros);

  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zeros < 1 ? 1 : min - zeros;

  answer = [max, min];
  return answer;
}

function solution3(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
