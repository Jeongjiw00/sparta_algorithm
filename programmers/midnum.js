function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  const n = Math.floor(array.length / 2);
  const answer = array[n];
  return answer;
}

console.log(solution([9, -1, 0]));
