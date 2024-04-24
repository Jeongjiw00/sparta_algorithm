// 실패율
function solution(N, stages) {
  let map = new Map();

  for (let i = 1; i <= N; i++) {
    let clear = 0;
    let fail = 0;
    let failure = 0;

    for (let j = 0; j < stages.length; j++) {
      if (i <= stages[j]) {
        clear += 1;
      }
    }

    for (let k = 0; k < stages.length; k++) {
      if (stages[k] == i) {
        fail += 1;
      }
    }

    failure = fail / clear;
    map.set(i, failure);
  }

  let sorted = [...map].sort((a, b) => b[1] - a[1]);

  return sorted.map((e) => e[0]);
}
