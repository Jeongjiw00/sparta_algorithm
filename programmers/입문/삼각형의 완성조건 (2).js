// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수, 나머지 한 변이 될 수 있는 정수의 개수를 return

function solution(sides) {
  let more = 0,
    less = 0;
  let cnt = 0;

  if (sides[0] > sides[1]) {
    more = sides[0];
    less = sides[1];
  } else {
    more = sides[1];
    less = sides[0];
  }

  // 두 변 중 가장 긴 변이 있을 경우
  for (let i = 1; i < more; i++) {
    if (i > more - less) {
      cnt++;
    }
  }

  // 나머지 변이 가장 긴 변인 경우
  for (let j = more; j < more + less; j++) {
    cnt++;
  }

  return cnt;
}

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13
