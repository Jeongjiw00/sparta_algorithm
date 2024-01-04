// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return

function solution(bin1, bin2) {
  let answer = "";
  let more;
  let less;
  let condition = bin1.length > bin2.length;
  let max_length = condition ? bin1.length : bin2.length;
  let d = condition ? bin1.length - bin2.length : bin2.length - bin1.length;

  if (condition) {
    more = bin1;
    less = bin2;
  } else {
    more = bin2;
    less = bin1;
  }

  for (let i = 0; i < max_length; i++) {
    if (less[i - d] === undefined) {
      answer += Number(more[i]);
    } else {
      answer += Number(more[i]) + Number(less[i - d]);
    }
  }

  // 문자열은 원시값 따라서 배열로 전환
  const array = answer.split("");
  for (let j = array.length - 1; j > -1; j--) {
    if (Number(array[j]) >= 2) {
      if (array[j - 1] !== undefined) {
        array.splice(
          j - 1,
          2,
          String(Number(array[j - 1]) + 1),
          String(Number(array[j]) - 2)
        );
      } else {
        array.splice(j, 1, String(Number(array[j]) - 2));
        array.unshift("1");
      }
    }
  }
  return array.join("");
}

// console.log(solution("10", "11")); // "101"
console.log(solution("1001", "1111")); // "11000"
// console.log(solution("100001", "1010101")); // "1110110"
// console.log(solution("1111111111", "1111111111")); // "10111111110"
