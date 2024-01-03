// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return

function solution(my_string) {
  let sum = 0;
  let string_array = my_string.toUpperCase().split("");

  for (let i = 0; i < string_array.length; i++) {
    // isNaN() - 숫자이면 false, 알파벳과 숫자+알파벳인 경우에는 true
    if (isNaN(string_array[i])) {
      string_array[i] = " ";
    }
  }

  let number_array = string_array.join("").split(" ");
  number_array.filter((x) => {
    if (!isNaN(x)) {
      sum += Number(x);
    }
  });

  return sum;
}

console.log(solution("aAb1B2cC34oOp") === 37);
// console.log(solution("1a2b3c4d123Z") === 133);
