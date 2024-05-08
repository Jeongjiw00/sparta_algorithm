// 프로세스
function solution(priorities, location) {
  let answer = 0;
  let array = [];
  let max_value = Math.max(...priorities);

  for (let i = 0; i < priorities.length; i++) {
    array.push(i);
  }

  //priorities 배열이 비어있을 때까지 반복
  while (priorities.length != 0) {
    max_value = Math.max(...priorities);

    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      array.push(array.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (array.shift() == location) return answer;
    }
  }
}
