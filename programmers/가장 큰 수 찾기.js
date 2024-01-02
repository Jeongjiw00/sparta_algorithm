// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return

function solution(array) {
  let max = 0;
  let index;

  for (let number of array) {
    if (number > max) {
      max = number;
      index = array.indexOf(max);
    }
  }
  return [max, index];
}

console.log(solution([1, 8, 3]));
