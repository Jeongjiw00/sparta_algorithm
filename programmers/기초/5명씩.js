// 5명씩
function solution(names) {
  return names.filter((name, idx) => idx % 5 === 0);
}
