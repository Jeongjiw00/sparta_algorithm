// 등차수열의 특정한 항만 더하기
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return

function solution(a, d, included) {
  let result = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) result += a + d * i;
  }

  return result;
}

console.log(solution(3, 4, [true, false, false, true, true]));
