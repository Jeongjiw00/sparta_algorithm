function solution(my_string, n) {
  var answer = "";
  for (let i in my_string) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}

console.log(solution("hello", 3));

//그냥 단순히 answer += my_string[i] * n하면 NaN이 나옴!!