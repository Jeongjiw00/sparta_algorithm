// 튜플
function solution(s) {
  return s
    .match(/{[0-9,]+}/g)
    .map((v) => v.match(/[0-9]+/g).map((v) => +v))
    .sort((a, b) => a.length - b.length)
    .reduce((a, c) => [...a, ...c.filter((v) => !a.includes(v))], []);
}
