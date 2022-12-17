function solution(numbers) {
  let max_num = 0;
  let index = 0;
  let next_num = 0;
  for (let i in numbers) {
    if (numbers[i] > max_num) {
      max_num = numbers[i];
      index = i;
    }
  }

  numbers.splice(index, 1);

  for (let j in numbers) {
    if (numbers[j] > next_num) {
      next_num = numbers[j];
    }
  }
  return max_num * next_num;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
console.log(solution([1, 9, 9, 5, 2]));
