// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.

function solution(numlist, n) {
  let answer = numlist.sort((a, b) => {
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return b - a;
    }
    return Math.abs(a - n) - Math.abs(b - n);
  });

  return answer;
}

// 좀 더 간단하게
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }

console.log(solution([1, 2, 3, 4, 5, 6], 4));
