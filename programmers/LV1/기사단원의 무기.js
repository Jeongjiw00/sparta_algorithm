// 기사단원의 무기
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let a = 0;

    // 시간단축
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (Math.pow(j, 2) === i) {
          a += 1;
        } else {
          a += 2;
        }
      }
    }

    if (a <= limit) {
      answer += a;
    } else {
      answer += power;
    }
  }

  return answer;
}
