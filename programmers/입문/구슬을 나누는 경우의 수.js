// 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return

function solution(balls, share) {
  let denom = 1;
  let numer = 1;

  // 조합 nCr
  if (balls - share < share) {
    share = balls - share;
  }
  // 분자
  for (let i = balls; i > balls - share; i--) {
    numer = numer * i;
  }

  // 분모
  for (let j = share; j >= 1; j--) {
    denom = denom * j;
  }

  return numer / denom;
}

console.log(solution(3, 2) === 3);
console.log(solution(5, 3) === 10);
