function solution(numbers) {
  let max = 0;
  let array1;
  let array2 = [];

  // 제곱
  array1 = numbers.map((number) => number ** 2);

  // 모든 경우의 수
  for (let i of numbers) {
    for (let j of numbers) {
      array2.push(i * j);
    }
  }

  // 모든 경우의 수 - 제곱
  for (let x of array1) {
    for (let y of array2) {
      if (x === y) {
        const findIndex = array2.indexOf(y);

        array2.splice(findIndex, 1);
      }
      continue;
    }
  }

  // 가장 큰 값
  max = Math.max(...array2);

  return max;
}

console.log(solution([-1, 0, 0]) === 0);
