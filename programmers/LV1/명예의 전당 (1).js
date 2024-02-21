// 명예의 전당 (1)
function solution(k, score) {
  let result = [],
    record = [];

  score.forEach((v, i) => {
    record.sort((a, b) => b - a);

    if (i < k) record.push(v);
    else {
      if (Math.min(...record) < v) {
        record.pop();
        record.push(v);
      }
    }

    result.push(Math.min(...record));
  });

  return result;
}
