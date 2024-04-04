// 징검다리 건너기
// 배열돌면서 각 자리수 -1해준다
// 연속적으로 0이 k개가 나오면 몇 번 반복했는지 리턴
function solutionX(stones, k) {
  let array_0 = [];
  let friends = 0;
  // 처음부터 아무도 못 건너는 경우
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] == 0) {
      array_0.push(0);
    } else {
      array_0 = [];
    }

    if (array_0.length == k) break;
  }

  while (array_0.length !== k) {
    // 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.
    stones = stones.map(function (a) {
      if (a > 0) {
        return a - 1;
      } else {
        return 0;
      }
    });

    friends++;

    // 건널 수 없는 디딤돌의 개수가 k를 넘는 경우를 찾기
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] == 0) {
        array_0.push(0);
      } else {
        array_0 = [];
      }

      if (array_0.length == k) break;
    }
  }

  return friends;
}

// 위 방법과 슬라이딩 윈도우로는 효율성이 해결되지 않아 이진탐색으로 방법 변경
// 다음 번엔 파이썬으로
// 이진탐색
function solution(stones, k) {
  let first = 1;
  let last = 200000000;

  while (first <= last) {
    const mid = ((first + last) / 2) >> 0;
    console.log(mid, "mid");

    let count = 0;

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) count++;
      else count = 0;

      console.log(count, "count");
      if (count === k) break;
    }

    if (count === k) last = mid - 1;
    else first = mid + 1;
    console.log("first", first, "last", last);
  }

  return first;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
// console.log(solution([7, 2, 8, 7, 2, 5, 9], 3)); // 7
// console.log(solution([1, 1, 1, 1, 1, 1, 1], 3)); // 1
