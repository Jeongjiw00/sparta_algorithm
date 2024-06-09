// 2개 이하로 다른 비트
function solution(numbers) {
  let answer = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let numberBinary = number.toString(2);
      let position = numberBinary.lastIndexOf("0");
      if (position === -1)
        answer.push(parseInt("10" + numberBinary.slice(1), 2));
      else {
        let value =
          numberBinary.slice(0, position) +
          "10" +
          numberBinary.slice(position + 2);
        answer.push(parseInt(value, 2));
      }
    }
  }
  return answer;
}
