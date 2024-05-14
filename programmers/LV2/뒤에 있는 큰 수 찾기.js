// 뒤에 있는 큰 수 찾기
function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  // 가장 가까이 있는 큰수를 찾기 위해 비교 스택 생성
  let stack = [];
  for (let i = 0; i < numbers.length; i++) {
    // stack에 담긴 값이 없다 = 현재 자신이 제일 크다
    // stack에 담긴 값이 있을 경우, stack의 값과 비교하여 가장 가까이 있는 큰수 찾기
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      // 가장 가까이 있는 큰 수를 찾는 것이기 때문에 최근 저장한 stack의 값이
      // 현재 자신보다 작다면 해당 stack 값은 버린다.
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
