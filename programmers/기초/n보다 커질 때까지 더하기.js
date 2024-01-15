// n보다 커질 때까지 더하기
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return
function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (answer <= n) {
      answer = answer + numbers[i];
    }
  }
  return answer;
}

function solution2(numbers, n) {
  let answer = 0;
  let i = 0;
  while (answer <= n) {
    answer += numbers[i++];
  }
  return answer;
}
