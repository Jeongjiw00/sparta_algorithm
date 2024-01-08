// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return

function solution(array, n) {
  let d,
    min = 100,
    min_value;

  for (let number of array) {
    if (number > n) {
      d = number - n;
    } else {
      d = n - number;
    }

    if (min > d) {
      min = d;
      min_value = number;
    }

    if (min === d) {
      if (min_value > number) {
        min_value = number;
      }
    }
  }
  return min_value;
}

console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
