// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return

function solution(my_str, n) {
  let array = [];

  for (let i = 0; i < my_str.length / n; i++) {
    let index = i * n;
    let slice = my_str.substring(index, index + n);

    array.push(slice);
  }
  return array;
}

console.log(solution("abc1Addfggg4556b", 6)); // 	["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
