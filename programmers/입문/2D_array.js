function solution(num_list, n) {
  let array_index = Math.ceil(num_list.length / n);
  let answer = [];

  for (i = 0; i < array_index; i++) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// function solution(num_list, n) {
//   let result = [];

//   for(let i = 0; i < num_list.length / n; i++){
//       result = [...result, num_list.slice(i * n, i * n + n)];
//   }

//   return result;
// }

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
