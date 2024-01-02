// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

function solution(numbers, direction) {
  let answer = [];
  let length = numbers.length;

  if (direction === "right") {
    for (let index = 0; index < length; index++) {
      if (index === length - 1) {
        answer[0] = numbers[length - 1];
      } else {
        answer[index + 1] = numbers[index];
      }
    }
  }

  if (direction === "left") {
    for (let index = length - 1; index >= 0; index--) {
      if (index === 0) {
        answer[length - 1] = numbers[0];
      } else {
        answer[index - 1] = numbers[index];
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
