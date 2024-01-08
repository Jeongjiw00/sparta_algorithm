function solution(array) {
  let result = 0;
  let max = 0;
  let count = 0;
  let number_array = [];

  // 중복값없도록 새로 배열만들기
  for (let i in array) {
    if (!number_array.includes(array[i])) {
      number_array.push(array[i]);
    }
  }

  // 만든 배열가지고 최빈값구하기
  for (let j in number_array) {
    count = array.filter((number) => number === number_array[j]).length;

    if (count > max) {
      max = count;
      result = number_array[j];
    } else if (count === max) {
      result = -1;
    }
    count = 0;
  }

  return result;
}

console.log(solution([1, 2, 3, 3, 3, 4]) === 3);
console.log(solution([1, 1, 2, 2]) === -1);
console.log(solution([1]) === 1);
