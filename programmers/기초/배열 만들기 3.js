// 배열 만들기 3
// arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열
function solution(arr, intervals) {
  let answer = [];

  intervals.forEach((interval) => {
    const [start, end] = interval;
    const array = arr.slice(start, end + 1);
    answer.push(...array);
  });

  return answer;
}

// 다른 사람 풀이
function solution2(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}
