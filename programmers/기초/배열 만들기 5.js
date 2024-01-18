// 배열 만들기 5
function solution(intStrs, k, s, l) {
  const result = [];
  intStrs.forEach((a) => {
    const slice = a.slice(s, s + l);
    const num = Number(slice);
    if (num > k) result.push(num);
  });

  return result;
}
