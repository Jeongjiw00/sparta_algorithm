// 약수의 개수와 덧셈

function solution(left, right) {
  let answer = 0;
  let count = 0;

  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 개수는 홀수
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
